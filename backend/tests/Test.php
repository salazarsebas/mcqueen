<?php

use PHPUnit\Framework\TestCase;

class Calculator
{
    public function add($a, $b)
    {
        return $a + $b;
    }

    public function subtract($a, $b)
    {
        return $a - $b;
    }

    public function multiply($a, $b)
    {
        return $a * $b;
    }

    public function divide($a, $b)
    {
        if ($b === 0) {
            throw new InvalidArgumentException("Division by zero is not allowed.");
        }
        return $a / $b;
    }
}

/**
 * Sample test class for Calculator functionality.
 */
class Test extends TestCase
{
    /**
     * Tests the addition method.
     */
    public function testAddition()
    {
        $calculator = new Calculator();
        $result = $calculator->add(2, 3);
        $this->assertEquals(5, $result, '2 + 3 should equal 5');
    }

    /**
     * Tests the subtraction method.
     */
    public function testSubtraction()
    {
        $calculator = new Calculator();
        $result = $calculator->subtract(10, 4);
        $this->assertEquals(6, $result, '10 - 4 should equal 6');
    }

    /**
     * Tests the multiplication method.
     */
    public function testMultiplication()
    {
        $calculator = new Calculator();
        $result = $calculator->multiply(3, 7);
        $this->assertEquals(21, $result, '3 * 7 should equal 21');
    }

    /**
     * Tests the division method.
     */
    public function testDivision()
    {
        $calculator = new Calculator();
        $result = $calculator->divide(8, 2);
        $this->assertEquals(4, $result, '8 / 2 should equal 4');
    }

    /**
     * Tests division by zero, expecting an exception.
     */
    public function testDivisionByZero()
    {
        $this->expectException(\InvalidArgumentException::class);
        $calculator = new Calculator();
        $calculator->divide(5, 0);
    }
}
