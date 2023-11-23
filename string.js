function generateParenthesis(n) {
    const result = [];
  
    function generate(current, open, close) {
      if (current.length === 2 * n) {
        result.push(current);
        return;
      }
  
      if (open < n) {
        generate(current + '(', open + 1, close);
      }
  
      if (close < open) {
        generate(current + ')', open, close + 1);
      }
    }
  
    gener1ate('', 0, 0);
  
    return result;
  }
  
  const n1 = 2;
  console.log(generateParenthesis(n1));
  
  const n2 = 1;
  console.log(generateParenthesis(n2));
  