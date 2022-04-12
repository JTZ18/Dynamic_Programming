/**
 * Bryan designed a simple game for one of his courses. In his game, there is a set
of n blocks, each with different game points, and a character controlled by the player to jump
on the blocks. Here are the detailed rules of his game.
• Initially, all n blocks are visible. Only the first block (i.e. block 1) has 0 game points.
Each subsequent block has a positive integer number of game points.
• Once the character has jumped from block a to block b, those blocks with game points
smaller than or equal to the game points of block b will disappear. All blocks with game
points strictly greater than the game points of block b will still be visible.
• The character can only jump forward. For example, if the character is already at block 4,
then the character cannot go back to any of the first three blocks, even if they are visible.
• The player can choose to make the character skip blocks while jumping, and jump forward
to any visible block in front. For example, if the character is at block 2, and blocks 3, 4, 5
are visible, then the player can choose to make the character skip blocks 3 and 4, and
jump directly to block 5.
• The order of the blocks is fixed, and the corresponding game points for the blocks are
fixed.
• The game ends when the character is unable to jump forward to another visible block in
front. This includes the case when the character is at block n.
Given an array of non-negative integers A[1..n], representing the game points of all n blocks in
order, determine the maximum total number of game points you can get when the game ends
 */

// Design an algorithm to solve the problem with dynamic programming.
// The problem is to find the maximum total number of game points you can get when the game ends.


const blockGame = (i, A, DP={}) => {
    if (i <= 0) return 0;
    if (i in DP) return DP[i];
    else{
        let max = 0;
        for (let k = 0; k <= i; k++) {
            let value = blockGame(k-1, A, DP)
            if (value >= max && A[k] <= A[i]) {
                max = value;
            }
        }
        DP[i] = A[i] + max
        return DP[i]
        // console.log(DP[i])
    }

}

console.log(blockGame(4, [0,1,2,3,4]))
console.log(blockGame(3, [0,5,3,4,2,1]))