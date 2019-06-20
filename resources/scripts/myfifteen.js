///* 
// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.
// */
//
//
//$(document).ready(function(){
//    $("shufflebutton").onclick=shuffle;
//    positioningPieces();
//    });
//    var numberOnCurrentPiece=[];
//    var size=4;
//    function shuffle(){
//        var puzzlepieces=$("puzzlearea div");
//        //use 20 steps for shuffling
//        for(let step=0; step<200; step++){
//            list=[];
//            for(let p=0; p<puzzlepieces.length;p++){
//                var element=puzzlepieces[p];
//                var tempindex=parseInt(puzzlepieces[p].id);
//                if(canMoveTo(tempindex)!==-1){
//                  list.push(element);
//                }
//                var piece=list[Math.floor(Math.random()*list.length)];
//                var index= parseInt(piece.id);
//                var destination= canMoveTo(index);
//                movePieceFromTo(piece,index,destination);
//                numberOnCurrentPiece[destination]= numberOnCurrentPiece[index];
//                numberOnCurrentPiece[index]=0;
//                piece.id=destination;
//                list=[];
//                
//            }
//        }
//    }
//    
//    
//    function canMoveTo(index){
//        let  destination=-1;
//        let left= index-1;
//        let right=index+1;
//        let down=index+4;
//        let upward=index-4;
//        
//        if(left>=0 && left<16){
//            if(numberOnCurrentPiece[left]===0 && index % size !==0){
//                destination=left;
//            }
//        }
//        if(right>=0 && right<16){
//            if(numberOnCurrentPiece[right]===0 && index% size !==3){
//                destination=right;
//            }
//        }
//        if(upward>=0 && upward<16){
//            if(numberOnCurrentPiece[upward]===0 && Math.floor(index% size)!==0){
//                destination=upward;
//            }
//        }
//         if(down>=0 && down<16){
//            if(numberOnCurrentPiece[down]===0 && Math.floor(index% size)!==3){
//                destination=down;
//            }
//        }
//        return destination;
//    }
//    
//    function movePieceFromTo(piece, index, dest){
//        
//        var startX= Math.floor(index%size)*(400/size);
//        var startY= (index% size) *(400/size);
//        var destX= Math.floor( dest%size)*(400/size);
//        var destY= (dest% size) *(400/size);
//        var interval=10;
//         var i=0;
//        for( i=0; i<=100/interval; i++){
//            if(startX===destX){
//                setTimeout(stepMoveTo, i * interval, piece, startX, startY + (destY-startY)/(100/interval) * i);
//            }
//            else {
//                setTimeout(stepMoveTo,i*interval,piece,(destX-startX)/(100/interval)*i,startY);
//            }
//                
//        }
//    }
//    
//    
//    function stepMoveTo(piece,x,y){
//        piece.style.left= x +"px";
//        piece.style.top= y +"px";
//        
//    }
//    
//    function positioningPieces(){
//
//	var puzzlepieces = $$("#puzzlearea div");
//	for (var i = 0; i < puzzlepieces.length; i++) {
//		puzzlepieces[i].className = "puzzlepiece";
//		puzzlepieces[i].id = i;
//		numberOnCurrentPiece[i] = i + 1;
//		setPositionOfSinglePiece(puzzlepieces[i], i);
//		setBackgroundForSinglePiece(puzzlepieces[i], i);
//		//Event Handling
//		puzzlepieces[i].addEventListener('click', movePieceEvent);
//		puzzlepieces[i].onmouseover = highlightPiece;
//		puzzlepieces[i].onmouseout = dehighlightPiece;
//	}
//	       numberOnCurrentPiece[puzzlepieces.length] = 0;
//}
//    
//   function setPositionOfSinglePiece(piece, index) {
//       let x=Math.floor(index/size);
//       let y= index% size;
//       let topEdge= x*(400/size);
//       let leftEdge= y*(400/size);
//       piece.style.top=topEdge+"px";
//       piece.style.left=leftEdge+"px";
//   }
//    
//    function setBackgroundForSinglePiece(piece, index){
//        let x= Math.floor(index/size);
//        let y= index%size;
//        let rightEdge= (400-x)*(400/size);
//        let bottomEdge=(400-y)*(400/size);
//        piece.style.backgroundPosition= rightEdge+"px"+ bottomEdge+"px";
//    }
//    
//    
//    function movePieceEvent(){
//        let index= parseInt(this.id);
//        let dest=canMoveTo(index);
//        if(dest!==-1){
//            movePieceFrom(this, index, dest);
//            numberOnCurrentPiece[dest]=numberOnCurrentPiece[index];
//            numberOnCurrentPiece[index]=0;
//            this.id=dest;
//        }
//        //Judge whether it is a successful status
//	//If success, change the background image of the body
//	var puzzlepieces = $("#puzzlearea div");
//	var correctCount = 0;
//	for (var i = 0; i < puzzlepieces.length; i++) {
//		if (numberOnCurrentPiece[i] === i + 1)
//			correctCount++;
//	}
//	if (numberOnCurrentPiece[puzzlepieces.length] === 0)
//		correctCount++;
//	if (correctCount === 16) {
//		// alert("OH YEAH YOU ARE SUCCESSFUL!");
//		$('body')[0].setStyle({backgroundColor:'#900'});
//	}
//	else {
//		$('body')[0].setStyle({backgroundColor:'white'});
//	}
//}
//        
//    
//    //Highlight and dehighlight pieces
//function highlightPiece(event)
//{
//	if (canMoveTo(parseInt(this.id)) !== -1) {
//		this.style.borderColor = "red";
//		this.style.color = "#006600";
//		this.style.textDecoration = "underline";
//	}
//}
//
//function dehighlightPiece(event)
//{
//	this.style.borderColor = "black";
//    this.style.color = "black";
//    this.style.textDecoration = "";
//}
//    
//    
//     