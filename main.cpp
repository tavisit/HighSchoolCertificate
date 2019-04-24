#include <iostream>
#include <stdlib.h>
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
char status[FILENAME_MAX];
char buff[FILENAME_MAX];

void Mainjs(){
    system("node .\\Resourses\\main.js");
}
void StartChrome(){
    system("start chrome.exe --app=http://127.0.0.1:3000/home.html");

}
void StatusCall(){
    system(status);
}
int main()
{
    GetCurrentDir( buff, FILENAME_MAX );
    strcat(buff,"\\node.msi");
    strcat(status,"start ");
    strcat(status,buff);
    if( access( "C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\Node.js", F_OK ) != -1 ) {
            std::future<void> f = std::async(std::launch::async, Mainjs);

            StartChrome();
            f.get();

    } else {
        StatusCall();
        std::future<void> f = std::async(std::launch::async, Mainjs);

        StartChrome();
        f.get();

    }
    return 0;
}
