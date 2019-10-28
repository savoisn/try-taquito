import smartpy as sp

class Calculator(sp.Contract):
    def __init__(self):
        self.init(value = 0)

    @sp.entryPoint
    def multiply(self, params):
        self.data.value = params.x * params.y

    @sp.entryPoint
    def add(self, params):
        self.data.value = params.x + params.y

    @sp.entryPoint
    def square(self, x):
        self.data.value = x * x

    @sp.entryPoint
    def squareRoot(self, x):
        sp.verify(x >= 0)
        y = sp.newLocal('y', x)
        sp.while y * y > x:
            y.set((x // y + y) // 2)
        sp.verify((y * y <= x) & (x < (y + 1) * (y + 1)))
        self.data.value = y

    @sp.entryPoint
    def factorial(self, x):
        self.data.value = 1
        sp.for y in sp.range(1, x + 1):
            self.data.value *= y

    @sp.entryPoint
    def log2(self, x):
        self.data.value = 0
        y = sp.newLocal('y', x)
        sp.while 0 < y:
            self.data.value += 1
            y.set(y // 2)

if "templates" not in __name__:
    @addTest(name = "Calculator test")
    def test():
        c1 = Calculator()
        html  = c1.fullHtml()
        html += c1.multiply(x = 2, y = 5).html()
        html += c1.add(x = 2, y = 5).html()
        html += c1.add(x = 2, y = 5).html()
        html += c1.square(12).html()
        html += c1.squareRoot(0).html()
        html += c1.squareRoot(1234).html()
        html += c1.factorial(100).html()
        html += c1.log2(c1.data.value).html()
        setOutput(html)
