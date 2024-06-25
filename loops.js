/*Practice using a T-diagram to go through the following code snippets and predict the output.  Once you're done run your code and see if your prediction was correct.  Create a .js file with the code snippets and your predicted output and upload it once you're done*/

// Predict 1
function predict1(){
for(var num = 0; num < 15; num++){
    console.log(num);
    }
}
//predict1();
//First Prediction:
/* I believe that the console will print out numbers 0-14 */

//Outcome
/* Yes!!! The Output was eack number from 0 to 14 (all number less than 15!)*/

//Predict 2
function predict2(){
    for(var i = 1; i < 10; i+=2){
        if(i % 3 == 0){
            console.log(i);
        }
    }
    
}
//predict2();
//Prediction:
/* It appears that it is looking through Odd number that also has a remainder of 0. I dont think  it will find it as only even numbers have even remainers. I think (i) may return null*/

//Outcome
/*It only return 3 and 9! I see now that I was slitly confused oon how the % words to find the remiander, now I know. The loop wen t through each Odd number and divided it by 3, and any number that didnt ahve a remainder, would be printed to the console.That being 3 and 9.*/

//Predict 3
function predict3(){
    for(var j = 1; j <= 15; j++){
        if(j % 2 == 0){
            j+=2;
        }
        else if(j % 3 == 0){
            j++;
        }
        console.log(j);
    }
    
}
predict3();
//Prediction:
/* It appears that (j) is atarting off as a odd number. j == 1 , means that it wont pass either of the if statments, so we move on to the next number, which is 2. Since j == 2 , its now a even number, so the first if statment is true, reulting 2 being added to j , so j now == 4. Its safe to say as j continues to loop the first if stament now applys keeping j as a even number, the final value of j will be 14*/

//Outcome
/*I was wrong! It appears that the outcome is the switching from Odd numbers to Even. Again I was confused about how the modulus works. The steps to find the remainer is to, 1) divide the dividen by the divisor, 2)take the integer, ignore the decmal numbers, 3) multiply the integer by the divisor 4) subtract the result from the dividen. I follwed thoes steps but forgot to do step 4 which is subtract, which casued me to think most of the remianeder were equal to 0. If i did I would habe noticed that 1 isnt divisabel by either.The it would have moved on to 2 , 2 divide by itself is 0, so j +2 = 4. The console would have printed out the final value , being 4, not the index.Moving on to the next 5 isnt divisable by either as well, console would print 5. So on a so further. Numbers the did have a remainder of either would be displayed and numbers that weren't divisable would be displayed as well*/
