---
title: 'Codeforces: Psychos'
date: 'Jan 15 2023'
excerpt: 'short & sweet'
picture: 'programming.jpg'
background: 'computer.jpg'
---
Here's the [problem statement](https://codeforces.com/contest/319/problem/B)!

Would you be surprised to learn this has a 20-line solution? Let's find out how!

Observation 1: the answer is simply the maximum time it takes for a pyscho to die.

So, how do we find how long it takes each psycho to die?

Observation 2: let psycho *j* be the rightmost psycho that can kill psycho *i*. Psycho *i* is guaranteed to be dead by time (i - j)

However, psycho *i* can die quicker if the psychos between *j* & *i* kill each other.

Observation 3: psycho *i* will die 1 time-step after the last psycho between *j* & *i* dies

Now, it may not be immediately clear how to work off Obs. 3. However, Obs. 2 hints at using a monotonic stack to solve the problem of nearest greater value.
```
for i in 1 -> n:
    while (!stack.empty && a[i] > a[stack.top]):
        stack.pop()
    if (stack.empty) never dies
    else i is killed by psycho stack.back
    stack.push_back(i)
```
Ok, how can we factor Obs. 3 into this? With another observation!

Observation 4: psycho *i* will always take longer to die than any of the elements it pops. Take a moment to think about why!

Why is this significant? This means that checking the max of the range (j, i) is equivalent to checking the max of all popped elements! Reasoning: the death time of any psycho k will be greater than any psycho it pops, meaning we don't need to consider those popped elements when taking the maximum.

[final solution](https://codeforces.com/contest/319/submission/189384497)