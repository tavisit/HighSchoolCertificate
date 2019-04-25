#include <iostream>
#include <stdlib.h>
#include <windows.h>
#ifdef WINDOWS
#include <direct.h>
#define GetCurrentDir _getcwd
#else
#include <unistd.h>
#define GetCurrentDir getcwd
#endif
#include <string.h>
#include <process.h>
#include <stdint.h>
#include <thread>
#include <stdio.h>
#include <sys/types.h>
#include <unistd.h>
#include <future>
using namespace std;

void Mainjs(){
    system("node .\\Resourses\\main.js");
}
void StartChrome(){
    system("start chrome.exe http://127.0.0.1:3000/home.html");

}

int main()
{

    if( access( "C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\Node.js", F_OK ) != -1 ) {
            std::future<void> f = std::async(std::launch::async, Mainjs);
            StartChrome();
            f.get();
    } else {
        system("Server");
        std::future<void> f = std::async(std::launch::async, Mainjs);
        StartChrome();
        f.get();
    }

    return 0;
}
