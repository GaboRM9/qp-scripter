/*updateCustomVariable
Description
This function will help you to update the custom variables for the respondents while they are answering the survey.
Syntax: $survey.updateCustomVariable("Custom Variable Index", "Value")
Example Script
Consider a multiple-select choice question, the number of options selected on the question can be stored as a count under a custom variable. We can fetch the value of the count by calling out the custom variable in the survey.
*/
        /* get number of options selected in Q1 */
        var count = $survey.getSelectedCount("Q1");
         
        $survey.updateCustomVariable(1, count);
        document.forms['run'].onsubmit();
