#include <bits/stdc++.h>
using namespace std;

bool isReflectionEqual(string &s) {
    int n = s.size();
    
    // Define the mirror mapping for characters
    string mirror = "A   3  HIL JM O   2TUVWXY51SE Z  8 ";
    
    for (int i = 0; i < (n + 1) / 2; ++i) {
        char mirroredChar = mirror[s[i] - 'A'];
        if (s[n - i - 1] != mirroredChar)
            return false;
    }
    
    return true;
}

int main() {
    string s = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    if (isReflectionEqual(s))
        cout << "The string is the same as its reflection in the mirror." << endl;
    else
        cout << "The string is not the same as its reflection in the mirror." << endl;
    
    return 0;
}
