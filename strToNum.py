# convert string into numbers
# ex: "1234 Hello"  res: 1234
str = "1234 Hello"

class Solution:
    def myAtoi(self, s: str) -> int:
        if not s:
            return 0
        s = s.strip() # RETURN COPY OF THE STRING WITH LEADING AND TRAILING WHITE SPACES
        if not s:
            return 0

        sign = 1
        start = 0
        if s[0] == '-':
            sign = -1
            start += 1
        elif s[0] == '+':
            start += 1

        res = 0
        for i in range(start, len(s)):
            if not s[i].isnumeric():
                return sign * res
            res = res * 10 + int(s[i])
            if sign == 1 and res > 2 ** 31 -1:
                return 2 ** 31 - 1
            elif sign == -1 and res >= 2 ** 31:
                return -2 ** 31
        return sign * res