'''
// The power function calculates x raised to the nth power. 
// If implemented in O(n) it would simply be a for loop over n and multiply
// x n times. Instead implement this power function in O(log n) time. You can 
// assume that n will be a non-negative integer.
'''
def pow(x, y):   
    if(y == 0): return 1
    temp = pow(x, int(y / 2))  
      
    if (y % 2 == 0): 
        return temp * temp 
    else: 
        if(y > 0): return x * temp * temp 
        else: return (temp * temp) / x 


print(pow(5, 3))
# 125
