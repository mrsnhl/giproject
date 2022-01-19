#include <iostream>
 
using namespace std;
 
int main()
{
    int T;
    cin>> T;
    while(T--){
        int N,M;
        cin>>N>>M;
        int arr[N];
        for(int i=0;i<N;i++){
            cin>> arr[i];
        }
        int diff[N];
        diff[N-1]=M;
        for(int i=0;i<N-1;i++){
            diff[i]= arr[i+1]-arr[i];
        }
        int K,a=0,b=0,c=1;
        if(M%N==0){
            K= M/N;
        }
        else{
            K= M/N + 1;
        }
        while(c){
            for(int i=0;i<N-1;i++){
                if(diff[i]<K && diff[i]!=-1){
                    a++;
                    b=1;
                    M=M-diff[i];
                    diff[i] = -1;
                    if(M%(N-a)==0){
                        K= M/(N-a);
                    }
                    else{
                    K= M/(N-a) + 1;
                    }
                }
                //cout<<b;
                if(b==0){
                    c=0;
                }
            //b=0;    
            }
            //cout<<b;
            if(b==0){
                    c=0;
            }
            b=0;
            
            cout<<endl;
            
        }
        
        cout<<K<<endl;
    }
 
    return 0;
}