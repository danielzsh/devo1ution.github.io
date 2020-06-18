# Bubble Sort
## Overview
One of the most basic types of sorting is bubble sort. It gets its name from the fact that the largest values, like bubbles, will float to the top, and, after finding each subsequent largest value, the array becomes sorted.
## Algorithm
Start from the first element in the array. If it is larger than the element right after it, swap them. Repeat with the second through second-to-last elements. You have now found the largest value in the array and put it at the end. Now, repeat the same procedure, but decrease the upper-bound by one each time, until there is only one element left between the lower bound and upper bound.
![Bubble Sort Animation] (https://upload.wikimedia.org/wikipedia/commons/0/06/Bubble-sort.gif)
### Optimization
If no swaps are made, you can deduce that the array is already sorted, and break from the loop.
## Time Complexity
TODO Write about bubble sort time complexity.
