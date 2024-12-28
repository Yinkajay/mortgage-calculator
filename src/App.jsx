import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>  Mortgage Calculator
        Clear All

        Mortgage Amount

        Mortgage Term

        Interest Rate

        Mortgage Type
        Repayment
        Interest Only

        Calculate Repayments

        {/* <!-- Empty results start --> */}

        Results shown here

        Complete the form and click “calculate repayments” to see what
        your monthly repayments would be.

        {/* <!-- Empty results end --> */}

        {/* <!-- Completed results start --> */}

        Your results

        Your results are shown below based on the information you provided.
        To adjust the results, edit the form and click “calculate repayments” again.

        Your monthly repayments

        Total you'll repay over the term

        {/* <!-- Completed results end --> */}
        {/* <style>
    .attribution { font-size: 11px; text-align: center; }
    .attribution a { color: hsl(228, 45%, 44%); }
  </style> */}
        {/* <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div> */}
        </p>
    </>
  )
}

export default App
