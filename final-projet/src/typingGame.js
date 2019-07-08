//import React from 'react';
import "./typingGame.css"
import React, { Component } from "react";
import $ from "jquery"
import { userInfo } from "os";


class TypingGame extends Component {
    state = {
        wordsArray : ["hello", "world", "hi", "test"],
        position : 0,
        intervalId: 0
    }
    handleClick = (event) => {
        event.preventDefault()
        this.refs.btn.setAttribute("disabled", "disabled")
        this.refs.input.setAttribute("type", "text")
        // creates a div for each word
        var intervalId = setInterval(this.fallDown, 1000)
        // var latitude = this.state.position
        
        // var newPosition = latitude += 10
        // this.setState({
        //     position : newPosition
        // })
        $(this.state.wordsArray).each(function(index, value) {
            setTimeout(function(){
                // var newPosition = latitude += 10
                // console.log(newPosition)
                var box = $(".box").width();
                $('<div />', {
                    "text": value,
                    "id" : index,
                    "class" : "fallingBox",
                })
                .css({
                    "left" : Math.floor((Math.random()*(box-80))),
                    "display": "inline",
                    // "overflow" : "hidden",
                    // "visibility": "hidden",
                    // "top" : "0px"
                }).appendTo('.box');
                var test = document.getElementById(index)
                //console.log(test)
                // var currentTop = window.getComputedStyle(test, null).top
                // console.log(currentTop)
                // if (currentTop !== 0) {
                //    test.style.top = 0'
                // }
            }, 5000 * index)
        }); 

        // var word = document.getElementsByClassName("fallingBox")
        // $(word).each(function(index, value){
        //     var intervalId = setInterval(this.fallDown, 1000)
        //     console.log(intervalId)
        //     // console.log(value)
        //     // console.log(index)
        //    setTimeout(intervalId, 3000)
        // })

            
            // var words = this.state.wordsArray
            // for (var i = 0; i < words.length; i++){
                //     var intervalId = setInterval(this.fallDown, 100)
                //         this.setState({
                    //         intervalId : intervalId
                    //     })
                    // }
       
       
    //    var offset = 0;
    //    $.each(this.state.wordsArray, function(index, value) {
    //        setTimeout(function(){
    //            setInterval(function(){
    //            }
    //            , 3000)
    //            console.log("smething")
    //         }, 3000 + offset)
    //         offset += 1000
    //         });
        }

    // moves word down the y axis  
    fallDown = () => {
        var lives = document.getElementById("lives")
        var word = document.getElementsByClassName("fallingBox")
        var livesLeft = parseInt(lives.innerText)
        var latitude = this.state.position
        var divHeight = 500
        var position = word.position()
        console.log(position)
        // var latitude = function test(){
        //     if (){
        //         latitude = this.state.position
        //     } else {
        //         latitude = 0
        //     }
        // }
                //console.log(test)
                // var currentTop = window.getComputedStyle(test, null).top
                // console.log(currentTop)
                // if (currentTop !== 0) {
                //    test.style.top = 0'
                // }
        // when word enters from the top
        for (var i = 0; i < word.length; i++){

            // $(this.state.wordsArray).each(function(index, value){
            //     var test = document.getElementById(index)
                
            //     // for (var j = 0; j < test.length; j++) {
            //     //     if (test === null) {
            //     //         break
            //     //     }
            //     // }
            //     console.log(word)
            //     //var currentTop = test.style.top
            //     //console.log(currentTop)
            // })
            // var classes = document.getElementsByClassName("fallingBox")
            
            // for (var j = 0; j < classes.length; j++) {
            //     classes.change(function(){})
            //     console.log(classes[0].style.top)
            //     classes[j].style.top = latitude + "px";
            // }
            
            //console.log(ids)
            // var currentTop = window.getComputedStyle(ids, null).top
            //console.log(ids, currentTop)
            //console.log(ids.next())
            
            

            
            // for (var j = 0; j < classes.length; j++) {
            //     classes[j].find("id")
            //     console.log(elements)
            //     console.log()
            // }
          //  console.log(index)
         
            word[i].style.top = latitude + "px"; 
            word[i].style.display = "inline";
            word[i].style.visibility = "visible";
            word[i].style.border = "3px blue solid"
            // when word reaches the bottom
            if (latitude > divHeight) { 
                $(".fallingBox").remove()
                livesLeft--
                $("#lives").html(livesLeft)
                return;
            } 
        }
            
       
        // how the word moves 
        var newPosition = latitude += 10 
        this.setState({
            position : newPosition
        })
        
    }


    
    // deletes words if correctly typed
    deleteWord = (event) => {
        var score = document.getElementById("score")
        var yourScore = parseInt(score.innerText)
        if (event.key === "Enter"){
            if (this.state.wordsArray.includes($("input:text").val())) {
                yourScore++
                $("#score").html(yourScore)
                $(".fallingBox:contains("+ $("input:text").val() + ")").remove()
                $("input:text").val("")
            }
        }
    }

    

    render() {
        return (
            <div>
                <div className="box">
                    <div id="fallingBoxes">
                    {/* {this.state.wordsArray[0]} */}
                    </div>
                {/* words will populated here */}
                </div>
                <form id="wordInput">
                    <button ref="btn" onClick = {
                            this.handleClick
                            //this.fallDown
                        }
                        className="gameStart"
                    >START</button>
                    <input className="userInput" ref="input" type="hidden" autoComplete="off" onKeyPress={this.deleteWord} /><br/><br/>
                    <b>Score: </b><p id="score">0</p>
                    <b>Lives: </b><p id="lives">5</p>
                </form>
           </div>
          ); 
    }
}



export default TypingGame;
