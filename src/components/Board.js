import React from "react";
import { useState, useEffect } from "react";
import CreateBoard from "../Utils.js/CreateBoard";
import Cell from "./Cell";
import { revealed } from "../Utils.js/Reveal";
import GameOver from "../Endgame/GameOver";

function Board(){
    const [grid,setGrid]=useState([]);
    const [mines,setMines]=useState([]);
    const [nonMinesCnt, setNonMinesCnt]=useState(0);
    const [gameOver, setGameOver] = useState(false);

    const style={
        display : 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection : 'row',
        color: 'white'
    }

    useEffect(()=>{
        const newBoard=CreateBoard(10,10,20);
        setNonMinesCnt(10*10 - 20)
        setGrid(newBoard.board);
        setMines(newBoard.mineLocation);
        freshBoard();
    },[]);

    const freshBoard = () => {
        
    }

    const updateFlag = (e, x, y) =>{
        e.preventDefault();
        console.log("right click")
        //create a new grid object so original data will be saved
        let newGrid = JSON.parse(JSON.stringify(grid));
        newGrid[x][y].flagged = true;
        console.log(newGrid[x][y]);
        setGrid(newGrid);
    }

    const revealCell = (x, y) =>{
        console.log("left click")
        //create a new grid object so original data will be saved
        let newGrid = JSON.parse(JSON.stringify(grid));
        if(newGrid[x][y].value ==="X"){
            alert("you clicked a mine!");
            for(let i=0;i<mines.length;i++){
                newGrid[mines[i][0]][mines[i][1]].revealed=true;
            }
            setGrid(newGrid);
            setGameOver(true);
        }
        else{
            let revealedboard=revealed(newGrid,x,y,nonMinesCnt);
            setGrid(revealedboard.arr);
            setNonMinesCnt(revealedboard.newNonMines);
        }
    }
    
    return(

        <div className="parent">
        <div style={{color:"white",textAlign:"center",fontSize:"35px"}}>Non-Mines : {nonMinesCnt}</div>
        <div>
            
            {grid.map((singlerow,index1)=>{
                return (
                    <div style={style} key={index1}>
                        {singlerow.map((singlecol,index2)=>{
                        return  <Cell data={singlecol} key={index2} updateFlag={updateFlag} revealCell={revealCell}/>
                        })}
                    </div>
                )
            })}
        </div>
            <div>
                {gameOver && <GameOver />}
            </div>
            
        </div>
    );
};

export default Board;
