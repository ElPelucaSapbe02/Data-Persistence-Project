using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;
using System.IO;

public class MainManager : MonoBehaviour
{
    public Brick BrickPrefab;
    public int LineCount = 6;
    public Rigidbody Ball;

    public Text ScoreText;
    public GameObject GameOverText;
    public Text BestSocoreText;

    private bool m_Started = false;
    private int m_Points;

    private bool m_GameOver = false;

    public static MainManager ManaMain;
    public string player;
    public int bScore;
    public string bPlayer;

    // Start is called before the first frame update
    void Start()
    {
        const float step = 0.6f;
        int perLine = Mathf.FloorToInt(4.0f / step);
        player = StartGame.playerName;

        int[] pointCountArray = new[] { 1, 1, 2, 2, 5, 5 };
        for (int i = 0; i < LineCount; ++i)
        {
            for (int x = 0; x < perLine; ++x)
            {
                Vector3 position = new Vector3(-1.5f + step * x, 2.5f + i * 0.3f, 0);
                var brick = Instantiate(BrickPrefab, position, Quaternion.identity);
                brick.PointValue = pointCountArray[i];
                brick.onDestroyed.AddListener(AddPoint);
            }
        }

        if (ManaMain != null)
        {
            LoadBestScore();
            BestSocoreText.text = $"Best Score - {bPlayer}: {bScore}";
        }
    }

    private void Update()
    {
        if (!m_Started)
        {
            if (Input.GetKeyDown(KeyCode.Space))
            {
                m_Started = true;
                float randomDirection = Random.Range(-1.0f, 1.0f);
                Vector3 forceDir = new Vector3(randomDirection, 1, 0);
                forceDir.Normalize();

                Ball.transform.SetParent(null);
                Ball.AddForce(forceDir * 2.0f, ForceMode.VelocityChange);
            }
        }
        else if (m_GameOver)
        {
            
            if (m_Points > bScore)
            {
                setBestScore(player, m_Points);
            }
            else if (Input.GetKeyDown(KeyCode.Space))
            {
                SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
            }
        }
    }


    private void Awake()
    {
        if (ManaMain != null)
        {
            Destroy(ManaMain);
            return;
        }

        ManaMain = this;
        DontDestroyOnLoad(ManaMain);
    }

    void AddPoint(int point)
    {
        m_Points += point;
        ScoreText.text = $"Score : {m_Points}";
    }

    public void GameOver()
    {
        m_GameOver = true;
        GameOverText.SetActive(true);
    }

    public void setBestScore(string name, int score)
    {
        bPlayer = name;
        bScore = score;
        SaveBestScore(bPlayer, bScore);
    }

    [System.Serializable]
    class SaveData{
        public string playerName;
        public string bestScoreName;
        public int bestScore;
    }

    public void SaveBestScore(string pName, int pScore)
    {
        SaveData data = new SaveData();
        data.bestScoreName = pName;
        data.bestScore = pScore;

        Debug.Log(data.bestScore + data.bestScoreName);


        string json = JsonUtility.ToJson(data);

        File.WriteAllText(Application.persistentDataPath + "/bestScore.json", json);
    }

    public void LoadBestScore()
    {
        SaveData local = new SaveData();
        string path = Application.persistentDataPath + "/bestScore.json";
        if (File.Exists(path))
        {
            string json = File.ReadAllText(path);
            SaveData data = JsonUtility.FromJson<SaveData>(json);
            local.bestScoreName = data.bestScoreName;
            local.bestScore = data.bestScore;
        }
        else
        {
            local.bestScoreName = "Name";
            local.bestScore = 0;
        }
        setBestScore(local.bestScoreName, local.bestScore);
    }
}
