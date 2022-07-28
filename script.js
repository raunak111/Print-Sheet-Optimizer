<script language="JavaScript">

var nl = getNewLine()

function getNewLine() {
	var agent = navigator.userAgent

	if (agent.indexOf("Win") >= 0)
		return "\r\n"
	else
		if (agent.indexOf("Mac") >= 0)
			return "\r"

 	return "\r"

}

pagecode = '
#include <bits/stdc++.h>
using namespace std;

int i,j;

struct Pair
{
	int f, s, t;

	Pair(int f, int s, int t)
	{
		this->f = f;
		this->s = s;
		this->t = t;
	}
};

// Function to return the index
Pair* getSubArray(int *arr, int n, int K)
{
	int currSum = 0;
	int prevDif = 0;
	int currDif = 0;
	
	Pair *result = new Pair(-1, -1, abs(K - abs(currSum)));
	Pair *resultTmp = result;
	int i = 0;
	int j = 0;
	
	while (i<= j && j<n)
	{
		
		// Add Last element tp currSum
		currSum += arr[j];
		
		// Save Difference of previous Iteration
		prevDif = currDif;
		
		// Calculate new Difference
		currDif = K - abs(currSum);
		
		// When the Sum exceeds K
		if (currDif <= 0)
		{
			if (abs(currDif) < abs(prevDif))
			{
				
				// Current Difference greater
				// in magnitude. Store Temporary
				// Result
				resultTmp = new Pair(i, j, currDif);
			}
			else
			{
				
				// Difference in Previous was lesser
				// In previous, Right index = j-1
				resultTmp = new Pair(i, j - 1, prevDif);
					
				// In next iteration, Left Index Increases
				// but Right Index remains the Same
				// Update currSum and i Accordingly
				currSum -= (arr[i] + arr[j]);
				
				i += 1;
			}
		}
		
		// Case to simply increase Right Index
		else
		{
			resultTmp = new Pair(i, j, currDif);
			j += 1;
		}
		
		if (abs(resultTmp->t) < abs(result->t))
		{
			
			// Check if lesser deviation found
			result = resultTmp;
		}
	}
	return result;
}

int arraySum(int a[], int n)
{
    int initial_sum = 0;
    return accumulate(a, a+n, initial_sum);
}

int deleteElementsInRange(int arr[], int n, int l, int r) {
    int i, newIndex = 0;
    for (i = 0; i < n; i++) {
        // adding updating element if it is not in the given range
        if (i < l || i > r) {
            arr[newIndex] = arr[i];
            newIndex++;
        }
    }
    // returing the updated index
    return newIndex;
}

int optimize(int arr[],int n){
    
    //cout<<endl<<"the value of n is: "<<n<<endl;
	
	sort(arr,arr+n);
	
	cout<<"Sorted Array :"<<endl;
	for(int i=0; i<n; i++){
	    cout<<arr[i]<<" ";
	}
	cout<<endl<<endl;
	
	int K = 32;
	
	Pair *tmp = getSubArray(arr, n, K);
	i = tmp->f;
	j = tmp->s;
	int minDev = tmp->t;
	
	if (i == -1)
	{
		cout << "The empty array shows minimum Deviation"<< endl;
		return 0;
	}
	
	cout<<"The optimum sheet arrangement is: "<<endl;
	for(int k = i + 1; k < j + 1; k++)
	{
		cout << arr[k] << " ";
	}
    
}

// Driver Code
int main()
{
	int arr[] = { 3,5,4,9,7,2,8,10};

	int n = sizeof(arr) / sizeof(arr[0]);
    
    int shavedcount = 0;
    vector<int> odds;
    	
	for(int i=0; i<n; i++)
    {
        if(arr[i]%2!=0)
        {
            odds.push_back(arr[i]);
            arr[i] = arr[i]-1;
            shavedcount++;
        }
    }
	
	compute:
	
	optimize(arr,n);
	
    n = deleteElementsInRange(arr,n,i+1,j);

	cout<<endl;
	
	if (arraySum(arr,n) > 32){
	    goto compute;
	}
	else{
	   cout<<endl<<"The remaining items are: "<<endl;
	
	    for(int i=0; i<n; i++){
	        cout<<arr[i]<<" ";
	    }
	    
	    cout<<endl<<endl;
	    
	    cout<<"The shaved count is: "<<endl<<shavedcount<<endl<<endl;
	    
	    cout<<"The converted odds are as follows:"<<endl;
	    for (int x : odds)
        cout << x << " -> " << x-1 <<endl;
	    cout<<endl;
	}
	return 0;
}'

document.write(pagecode);

</script>
