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
char status[FILENAME_MAX];
char buff[FILENAME_MAX];
char space = 34;

void StatusCall(){
    GetCurrentDir( buff, FILENAME_MAX );
    strcat(buff,"\\node.msi");
    strcat(status,"start ");
    strcat(status,buff);
    system(status);
}
int main(){
    cout<<"Instalare Server...\n";
    StatusCall();
    while(access( "C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\Node.js", F_OK ) == -1);
    cout<<"Asteapta...";
    Sleep(15000);
    system("node --help");
    return 0;
}
