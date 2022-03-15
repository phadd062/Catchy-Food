def col2num(col):
    num = 0
    for c in col:
        num = num * 26 + (ord(c.upper()) - ord("A")) + 1
    return num


def num2col(n):
    string = ""
    while n > 0:
        n, remainder = divmod(n - 1, 26)
        string = chr(65 + remainder) + string
    return string
