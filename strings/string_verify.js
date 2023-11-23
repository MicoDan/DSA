var isValid = function(s) {
    const stack = [];
    
    for (const char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (char === ')') {
            if (stack.length === 0 || stack.pop() !== '(') {
                return false;
            }
        } else if (char === '}') {
            if (stack.length === 0 || stack.pop() !== '{') {
                return false;
            }
        } else if (char === ']') {
            if (stack.length === 0 || stack.pop() !== '[') {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};

console.log(isValid('()[])'))