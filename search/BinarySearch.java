package search;


/**
 * BinarySearch
 */
public class BinarySearch {
    public static void main(String[] args) {

        int orderedNumbers[] = { 1, 2, 5, 7, 23, 57, 59 };

        System.out.println(iterativeSearch(orderedNumbers, 1));
        System.out.println(recursiveSearch(orderedNumbers, 0, orderedNumbers.length - 1, 1));

        System.out.println(iterativeSearch(orderedNumbers, 49));
        System.out.println(recursiveSearch(orderedNumbers, 0, orderedNumbers.length - 1, 49));

        System.out.println(iterativeSearch(orderedNumbers, 57));
        System.out.println(recursiveSearch(orderedNumbers, 0, orderedNumbers.length - 1, 57));
    }

    // time O(logn)
    // space O(1)
    private static int iterativeSearch(int orderedNumbers[], int target) {
        int n = orderedNumbers.length;
        int lowIndex = 0;
        int highIndex = n - 1;

        while (lowIndex <= highIndex) {
            int midIndex = (lowIndex + highIndex) / 2;
            if (target == orderedNumbers[midIndex]) {
                return midIndex;
            } else if (target > orderedNumbers[midIndex]) {
                lowIndex = midIndex + 1;
            } else {
                highIndex = midIndex - 1;
            }
        }
        return -1;
    }

    // time O(logn)
    // space O(logn) => call stack
    private static int recursiveSearch(int orderedNumbers[], int lowIndex, int highIndex, int target) {
        if (lowIndex > highIndex)
            return -1;

        int midIndex = (lowIndex + highIndex) / 2;
        if (target == orderedNumbers[midIndex]) {
            return midIndex;
        } else if (target > orderedNumbers[midIndex]) {
            return recursiveSearch(orderedNumbers, midIndex + 1, highIndex, target);
        } else {
            return recursiveSearch(orderedNumbers, lowIndex, midIndex - 1, target);
        }
    }

}
