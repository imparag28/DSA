var permute = function (nums) {
    let res = [];
    dfs(nums, new Set(), res);
    return res;
}

function dfs(nums, curr, res) {
    if (curr.size == nums.length) {
        res.push(Array.from(curr));
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        if (curr.has(nums[i])) continue;
        curr.add(nums[i]);
        dfs(nums, curr, res);
        curr.delete(nums[i]);
    }
}