import '../App.css'
import { useEffect, useState } from "react";
import PageButton from '../Button';

function Season2() {

  return (
    <>
      <PageButton/>
      <h1>Season 2</h1>
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
            <td className='yellow'>0</td>
            <td>Bloodbot</td>
            <td><img className="botImg" src="/img/Bloodbot.png" alt="Bloodbot" /></td>
            <td>1109</td>
            <td className="red">{1109 - 1110}</td>
            <td>{7 - 3}</td>
            <td>{5 - 3}</td>
            <td>{2 - 1}</td>
          </tr>
          <tr>
            <td>2</td>
            <td className='yellow'>0</td>
            <td>Assassin Bot</td>
            <td><img className="botImg" src="/img/AssassinBot.png" alt="AssassinBot" /></td>
            <td>1107</td>
            <td className="green">+{1107 - 1086}</td>
            <td>{8 - 5}</td>
            <td>{3 - 1}</td>
            <td>{3 - 1}</td>
          </tr>
          <tr>
            <td>3</td>
            <td className='yellow'>New</td>
            <td>G2 E-Bot</td>
            <td><img className="botImg" src="/img/G2-EBot.png" alt="G2EBot" /></td>
            <td>1095</td>
            <td className="green">+{1095 - 1000}</td>
            <td>{5 - 0}</td>
            <td>{0 - 0}</td>
            <td>{2 - 0}</td>
          </tr>
          <tr>
            <td>4</td>
            <td className='green'>+1</td>
            <td>Bottus Maximus</td>
            <td><img className="botImg" src="/img/BottusMaximus.png" alt="BottusMaximus" /></td>
            <td>1085</td>
            <td className="green">+{1085 - 1054}</td>
            <td>{5 - 3}</td>
            <td>{8 - 3}</td>
            <td>{1 - 1}</td>
          </tr>
          <tr>
            <td>5</td>
            <td className='green'>+1</td>
            <td>BOTential</td>
            <td><img className="botImg" src="/img/BOTential.png" alt="BOTential" /></td>
            <td>1050</td>
            <td className="green">+{1050 - 974}</td>
            <td>{6 - 2}</td>
            <td>{4 - 2}</td>
            <td>{4 - 3}</td>
          </tr>
          <tr>
            <td>6</td>
            <td className='red'>-2</td>
            <td>Pawn Bot</td>
            <td><img className="botImg" src="/img/PawnBot.png" alt="PawnBot" /></td>
            <td>1031</td>
            <td className="red">{1031 - 1070}</td>
            <td>{6 - 4}</td>
            <td>{4 - 2}</td>
            <td>{4 - 1}</td>
          </tr>
          <tr>
            <td>7</td>
            <td className='yellow'>New</td>
            <td>Kamikaze Bot</td>
            <td><img className="botImg" src="/img/KamikazeBot.png" alt="KamikazeBot" /></td>
            <td>1018</td>
            <td className="green">+{1018 - 1000}</td>
            <td>{2 - 0}</td>
            <td>{3 - 0}</td>
            <td>{2 - 0}</td>
          </tr>
          <tr>
            <td>8</td>
            <td className='yellow'>New</td>
            <td>One Piece Random Bot</td>
            <td><img className="botImg" src="/img/OnePieceRandomBot.png" alt="OnePieceRandomBot" /></td>
            <td>1017</td>
            <td className="green">+{1017 - 1000}</td>
            <td>{3 - 0}</td>
            <td>{2 - 0}</td>
            <td>{2 - 0}</td>
          </tr>
          <tr>
            <td>9</td>
            <td className='yellow'>0</td>
            <td>5x Random Bot</td>
            <td><img className="botImg" src="/img/5xRandomBot.png" alt="FiveXRandomBot" /></td>
            <td>973</td>
            <td className="green">+{973 - 928}</td>
            <td>{3 - 1}</td>
            <td>{6 - 2}</td>
            <td>{5 - 4}</td>
          </tr>
          <tr>
            <td>10</td>
            <td className='yellow'>New</td>
            <td>Random Bot</td>
            <td><img className="botImg" src="/img/RandomBot.png" alt="RandomBot" /></td>
            <td>969</td>
            <td className="red">{969 - 1000}</td>
            <td>{2 - 0}</td>
            <td>{3 - 0}</td>
            <td>{2 - 0}</td>
          </tr>
          <tr>
            <td>11</td>
            <td className='yellow'>New</td>
            <td>One Move Bot</td>
            <td><img className="botImg" src="/img/OneMoveBot.png" alt="OneMoveBot" /></td>
            <td>965</td>
            <td className="red">{965 - 1000}</td>
            <td>{2 - 0}</td>
            <td>{1 - 0}</td>
            <td>{4 - 0}</td>
          </tr>
          <tr>
            <td>12</td>
            <td className='yellow'>New</td>
            <td>Bot Ross</td>
            <td><img className="botImg" src="/img/BotRoss.png" alt="BotRoss" /></td>
            <td>949</td>
            <td className="red">{949 - 1000}</td>
            <td>{1 - 0}</td>
            <td>{4 - 0}</td>
            <td>{2 - 0}</td>
          </tr>
          <tr>
            <td>13</td>
            <td className='yellow'>New</td>
            <td>Adventurous King Bot</td>
            <td><img className="botImg" src="/img/AdventurousKingBot.png" alt="AdventurousKingBot" /></td>
            <td>942</td>
            <td className="red">{942 - 1000}</td>
            <td>{1 - 0}</td>
            <td>{4 - 0}</td>
            <td>{2 - 0}</td>
          </tr>
          <tr>
            <td>14</td>
            <td className='yellow'>0</td>
            <td>Shield Bot</td>
            <td><img className="botImg" src="/img/ShieldBot.png" alt="ShieldBot" /></td>
            <td>917</td>
            <td className="red">{917 - 924}</td>
            <td>{2 - 1}</td>
            <td>{6 - 2}</td>
            <td>{6 - 4}</td>
          </tr>
          <tr>
            <td>15</td>
            <td className='yellow'>New</td>
            <td>Savage Beastbot</td>
            <td><img className="botImg" src="/img/SavageBeastBot.png" alt="SavageBeastBot" /></td>
            <td>910</td>
            <td className="red">{910 - 1000}</td>
            <td>{0 - 0}</td>
            <td>{3 - 0}</td>
            <td>{4 - 0}</td>
          </tr>
          <tr>
            <td>16</td>
            <td className='yellow'>0</td>
            <td>Idiot Bot</td>
            <td><img className="botImg" src="/img/IdiotBot.png" alt="IdiotBot" /></td>
            <td>863</td>
            <td className="green">+{863 - 854}</td>
            <td>{1 - 0}</td>
            <td>{4 - 1}</td>
            <td>{9 - 6}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Season2;