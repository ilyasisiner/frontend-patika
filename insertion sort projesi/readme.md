[22,27,16,2,18,6] 

1-verilen dizinin sort türüne göre aşamaları

   1. 22,27,16,2,18,6 n
   2. [16,22]27,2,18,6 n-1
   3. [2,16,22]27,18,6 n-2
   4. [2,16,18,22]27,6 n-3
   5. [2,6,16,18,22]27 n-4
   6. [2,6,16,18,22,27] 1



2-Big-O gösterimini

    n+(n-1)+(n-2)+(n-3)+(n-4)+1=(n^2+n)/2=O(n^2)



3-Time Complexity
    1. Average case:O(n)
    2. Worst case:O(n^2)
    3. Best case:O(n^2)

4- 18 sayısı: Average Case
    

[7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımı

    1. [3,7]5,8,2,9,4,15,6
    2. [3,5,7]8,2,9,4,15,6
    3. [3,5,7,8]2,9,4,15,6
    4. [2,3,5,7,8]9,4,15,6



