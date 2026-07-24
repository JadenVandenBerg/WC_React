import '../App.css'
import { useEffect, useState } from "react";
import PageButton from '../Button';

function Season1() {

  return (
    <>
      <PageButton/>
      <h1>Season 1</h1>
      <table id="seasonTable">
        <tbody>
          <tr>
            <th>#</th>
            <th># +/-</th>
            <th>Bot</th>
            <th>Profile</th>
            <th>Elo</th>
            <th>+/-</th>
            <th>Wins</th>
            <th>Draws</th>
            <th>Losses</th>
          </tr>
          <tr>
            <td>1</td>
            <td className='yellow'>New</td>
            <td>Bloodbot</td>
            <td><img className="botImg" src="/img/Bloodbot.png" alt="Bloodbot" /></td>
            <td>1110</td>
            <td className="green">+110</td>
            <td>4</td>
            <td>3</td>
            <td>1</td>
          </tr>
          <tr>
            <td>2</td>
            <td className='yellow'>New</td>
            <td>Assassin Bot</td>
            <td><img className="botImg" src="/img/AssassinBot.png" alt="AssassinBot" /></td>
            <td>1086</td>
            <td className="green">+86</td>
            <td>5</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>3</td>
            <td className='yellow'>New</td>
            <td>Pawn Bot</td>
            <td><img className="botImg" src="/img/PawnBot.png" alt="PawnBot" /></td>
            <td>1070</td>
            <td className="green">+70</td>
            <td>4</td>
            <td>2</td>
            <td>1</td>
          </tr>
          <tr>
            <td>4</td>
            <td className='yellow'>New</td>
            <td>Bottus Maximus</td>
            <td><img className="botImg" src="/img/BottusMaximus.png" alt="BottusMaximus" /></td>
            <td>1054</td>
            <td className="green">+54</td>
            <td>3</td>
            <td>3</td>
            <td>1</td>
          </tr>
          <tr>
            <td>5</td>
            <td className='yellow'>New</td>
            <td>BOTential</td>
            <td><img className="botImg" src="/img/BOTential.png" alt="BOTential" /></td>
            <td>974</td>
            <td className="red">-26</td>
            <td>2</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td>6</td>
            <td className='yellow'>New</td>
            <td>5x Random Bot</td>
            <td><img className="botImg" src="/img/5xRandomBot.png" alt="FiveXRandomBot" /></td>
            <td>928</td>
            <td className="red">{928 - 1000}</td>
            <td>1</td>
            <td>2</td>
            <td>4</td>
          </tr>
          <tr>
            <td>7</td>
            <td className='yellow'>New</td>
            <td>Shield Bot</td>
            <td><img className="botImg" src="/img/ShieldBot.png" alt="ShieldBot" /></td>
            <td>924</td>
            <td className="red">{924 - 1000}</td>
            <td>1</td>
            <td>2</td>
            <td>4</td>
          </tr>
          <tr>
            <td>8</td>
            <td className='yellow'>New</td>
            <td>Idiot Bot</td>
            <td><img className="botImg" src="/img/IdiotBot.png" alt="IdiotBot" /></td>
            <td>854</td>
            <td className="red">{854 - 1000}</td>
            <td>0</td>
            <td>1</td>
            <td>6</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Season1;