using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class StartGame : MonoBehaviour
{
    public static string playerName;
    public InputField playerNameField;

    private void Start()
    {
    }

    public void loadMain()
    {
        playerName = playerNameField.text;       
        SceneManager.LoadScene(1);
    }
}
