## Bubble Sort
### Overview
One of the most basic types of sorting is bubble sort. It gets its name from the fact that the largest values, like bubbles, will float to the top, and, after finding each subsequent largest value, the array becomes sorted.
### Algorithm
Start from the first element in the array. If it is larger than the element right after it, swap them. Repeat with the second through second-to-last elements. You have now found the largest value in the array and put it at the end. Now, repeat the same procedure, but decrease the upper-bound by one each time, until there is only one element left between the lower bound and upper bound.
![Bubble Sort Animation] (https://upload.wikimedia.org/wikipedia/commons/0/06/Bubble-sort.gif)
#### Optimization
If no swaps are made, you can deduce that the array is already sorted, and break from the loop.
### Time Complexity
The first time, the code needs to make n - 1 comparisons, where n is the amount of elements that need to be sorted. The amount of comparisons decreases each time, and, if you draw it out (like the diagram below), you will find that about n<sup>2</sup>/2 comparisons need to be made.    
.    
.  .    
.  .  .    
.  .  .  .    
.  .  .  .  .    
Diagram if n = 6    
Since 2 is a constant value, we can say that the time complexity of bubble sort is n<sup>2</sup>.
