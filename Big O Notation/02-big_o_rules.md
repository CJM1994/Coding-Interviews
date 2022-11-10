4 Rules of Big O Notation for Interviews

1. Big O needs to be measured based on the worst case scenario (longest possible runtime)
2. Drop constants, they become insignificant as it scales towards infinity. O(3n + 102) just becomes O(n) as the impact of 3x and 102 become irrelevant the larger n becomes.
3. Use different terms for different inputs. If there is an array of length x and an array of length y, the big o must cover both of these inputs. Such as O(x + y) or O(x*y).
4. Drop non dominant names. If a function has a Big O of O(n + y^2) you would drop the n and be left with O(y^2).