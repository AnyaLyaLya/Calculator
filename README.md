### Software Engineer Test Task
# Task Description
Your task is to develop a single-page site with a simple calculator that performs basic math
operations.
The page should have the following layout and free design:

When a user opens the page, the site should check if the user has connected their wallet
using Metamask. If Metamask is not connected, the "Calculate" button should not be active,
and the label "Calculator used" should be hidden.
Please refer to the following Calculator Contract - https://sepolia.etherscan.io/address/0x1851ffbce02a134efd9ddbc91920b0c6dcefb6f5#code under Sepolia Testnet. The calculator
operations should be performed by calling the specific functions in the Calculator Contract
based on the selected operation from a dropdown menu. The functions available in the
contract are add, subtract, multiply, and divide. You should send a transaction to the
contract calling the specified function with the input values a and b.
For testing, you can use the following wallet (with some amount of test eth):
1433ce1ec08c988b9631e8f63817e0d102eab4f7d4933328fe91e7673970019a
Additionally, you need to extract the value of the state variable usageCount from the
contract and display it in the label "Calculator used: usageCount".

# Requirements
Your implementation should meet the following requirements:
1. The single-page site should have a responsive layout and a modern design.

2. When the page loads, it should check if Metamask is connected. If not, disable the
"Calculate" button and hide the "Calculator used" label.
3. Implement a dropdown menu to select the math operation (add, subtract, multiply, or
divide).
4. Implement input fields to enter the values a and b for the selected operation.
5. Implement a "Calculate" button that sends a transaction to the Calculator Contract
calling the specified function with the input values a and b.
6. Display the result of the calculation on the page.
7. Fetch the value of the usageCount state variable from the Calculator Contract and
display it in the "Calculator used: usageCount" label. This field should be updated
after each usage.