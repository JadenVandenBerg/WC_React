import '../App.css'
import { useEffect, useState } from "react";
import PageButton from '../Button';

function Season3() {

  return (
    <>
      <PageButton/>
      <h1>Season 3</h1>
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
            <td>1192</td>
            <td className="green">+{1192 - 1109}</td>
            <td>{11 - 7}</td>
            <td>{8 - 5}</td>
            <td>{2 - 2}</td>
          </tr>
          <tr>
            <td>2</td>
            <td className='green'>+1</td>
            <td>G2 E-Bot</td>
            <td><img className="botImg" src="/img/G2-EBot.png" alt="G2EBot" /></td>
            <td>1159</td>
            <td className="green">+{1159 - 1095}</td>
            <td>{10 - 5}</td>
            <td>{1 - 0}</td>
            <td>{3 - 2}</td>
          </tr>
          <tr>
            <td>3</td>
            <td className='green'>+1</td>
            <td>Bottus Maximus</td>
            <td><img className="botImg" src="/img/BottusMaximus.png" alt="BottusMaximus" /></td>
            <td>1131</td>
            <td className="green">+{1131 - 1085}</td>
            <td>{8 - 5}</td>
            <td>{11 - 8}</td>
            <td>{2 - 1}</td>
          </tr>
          <tr>
            <td>4</td>
            <td className='yellow'>New</td>
            <td>Christopher Columbot</td>
            <td><img className="botImg" src="/img/ChristopherColumbot.png" alt="ChristopherColumbot" /></td>
            <td>1113</td>
            <td className="green">+{1113 - 1000}</td>
            <td>{5 - 0}</td>
            <td>{1 - 0}</td>
            <td>{1 - 0}</td>
          </tr>
          <tr>
            <td>5</td>
            <td className='yellow'>New</td>
            <td>Two Move Bot</td>
            <td><img className="botImg" src="/img/TwoMoveBot.png" alt="TwoMoveBot" /></td>
            <td>1111</td>
            <td className="green">+{1111 - 1000}</td>
            <td>{5 - 0}</td>
            <td>{2 - 0}</td>
            <td>{0 - 0}</td>
          </tr>
          <tr>
            <td>6</td>
            <td className='green'>+7</td>
            <td>One Move Bot</td>
            <td><img className="botImg" src="/img/OneMoveBot.png" alt="OneMoveBot" /></td>
            <td>1071</td>
            <td className="green">+{1071 - 965}</td>
            <td>{7 - 2}</td>
            <td>{3 - 1}</td>
            <td>{4 - 4}</td>
          </tr>
          <tr>
            <td>7</td>
            <td className='yellow'>+2</td>
            <td>Kamikaze Bot</td>
            <td><img className="botImg" src="/img/KamikazeBot.png" alt="KamikazeBot" /></td>
            <td>1058</td>
            <td className="green">+{1058 - 1018}</td>
            <td>{5 - 2}</td>
            <td>{4 - 3}</td>
            <td>{5 - 2}</td>
          </tr>
          <tr>
            <td>8</td>
            <td className='red'>-4</td>
            <td>Assassin Bot</td>
            <td><img className="botImg" src="/img/AssassinBot.png" alt="AssassinBot" /></td>
            <td>1042</td>
            <td className="red">{1042 - 1107}</td>
            <td>{10 - 8}</td>
            <td>{4 - 3}</td>
            <td>{7 - 3}</td>
          </tr>
          <tr>
            <td>9</td>
            <td className='yellow'>New</td>
            <td>Hitman Bot</td>
            <td><img className="botImg" src="/img/HitmanBot.png" alt="HitmanBot" /></td>
            <td>1000</td>
            <td className="yellow">{1000 - 1000}</td>
            <td>{3 - 0}</td>
            <td>{1 - 0}</td>
            <td>{3 - 0}</td>
          </tr>
          <tr>
            <td>10</td>
            <td className='yellow'>New</td>
            <td>Thinking Bot</td>
            <td><img className="botImg" src="/img/ThinkingBot.png" alt="ThinkingBot" /></td>
            <td>996</td>
            <td className="red">{996 - 1000}</td>
            <td>{3 - 0}</td>
            <td>{1 - 0}</td>
            <td>{3 - 0}</td>
          </tr>
          <tr>
            <td>11</td>
            <td className='yellow'>New</td>
            <td>Restrictor Bot</td>
            <td><img className="botImg" src="/img/RestrictorBot.png" alt="RestrictorBot" /></td>
            <td>995</td>
            <td className="red">{995 - 1000}</td>
            <td>{2 - 0}</td>
            <td>{3 - 0}</td>
            <td>{2 - 0}</td>
          </tr>
          <tr>
            <td>12</td>
            <td className='yellow'>-1</td>
            <td>Pawn Bot</td>
            <td><img className="botImg" src="/img/PawnBot.png" alt="PawnBot" /></td>
            <td>991</td>
            <td className="red">{991 - 1031}</td>
            <td>{8 - 6}</td>
            <td>{5 - 4}</td>
            <td>{8 - 4}</td>
          </tr>
          <tr>
            <td>13</td>
            <td className='green'>+5</td>
            <td>Adventurous King Bot</td>
            <td><img className="botImg" src="/img/AdventurousKingBot.png" alt="AdventurousKingBot" /></td>
            <td>981</td>
            <td className="green">+{981 - 942}</td>
            <td>{4 - 1}</td>
            <td>{7 - 4}</td>
            <td>{3 - 2}</td>
          </tr>
          <tr>
            <td>14</td>
            <td className='red'>-1</td>
            <td>One Piece Random Bot</td>
            <td><img className="botImg" src="/img/OnePieceRandomBot.png" alt="OnePieceRandomBot" /></td>
            <td>974</td>
            <td className="red">{974 - 1017}</td>
            <td>{4 - 3}</td>
            <td>{4 - 2}</td>
            <td>{6 - 2}</td>
          </tr>
          <tr>
            <td>15</td>
            <td className='red'>-5</td>
            <td>BOTential</td>
            <td><img className="botImg" src="/img/BOTential.png" alt="BOTential" /></td>
            <td>965</td>
            <td className="red">{965 - 1050}</td>
            <td>{7 - 6}</td>
            <td>{6 - 4}</td>
            <td>{8 - 4}</td>
          </tr>
          <tr>
            <td>16</td>
            <td className='green'>+4</td>
            <td>Savage Beastbot</td>
            <td><img className="botImg" src="/img/SavageBeastBot.png" alt="SavageBeastBot" /></td>
            <td>957</td>
            <td className="green">+{957 - 910}</td>
            <td>{2 - 0}</td>
            <td>{7 - 3}</td>
            <td>{5 - 4}</td>
          </tr>
          <tr>
            <td>17</td>
            <td className='yellow'>New</td>
            <td>Equality Bot</td>
            <td><img className="botImg" src="/img/EqualityBot.png" alt="EqualityBot" /></td>
            <td>932</td>
            <td className="red">{932 - 1000}</td>
            <td>{0 - 0}</td>
            <td>{4 - 0}</td>
            <td>{3 - 0}</td>
          </tr>
          <tr>
            <td>18</td>
            <td className='yellow'>New</td>
            <td>Botdefender</td>
            <td><img className="botImg" src="/img/BotDefender.png" alt="Botdefender" /></td>
            <td>929</td>
            <td className="red">{929 - 1000}</td>
            <td>{0 - 0}</td>
            <td>{4 - 0}</td>
            <td>{3 - 0}</td>
          </tr>
          <tr>
            <td>19</td>
            <td className='green'>+2</td>
            <td>Shield Bot</td>
            <td><img className="botImg" src="/img/ShieldBot.png" alt="ShieldBot" /></td>
            <td>917</td>
            <td className="green">+{924 - 917}</td>
            <td>{4 - 2}</td>
            <td>{9 - 6}</td>
            <td>{8 - 6}</td>
          </tr>
          <tr>
            <td>20</td>
            <td className='yellow'>New</td>
            <td>Abilibot</td>
            <td><img className="botImg" src="/img/Abilibot.png" alt="Abilibot" /></td>
            <td>924</td>
            <td className="red">{924 - 1000}</td>
            <td>{1 - 0}</td>
            <td>{2 - 0}</td>
            <td>{4 - 0}</td>
          </tr>
          <tr>
            <td>21</td>
            <td className='green'>+3</td>
            <td>Idiot Bot</td>
            <td><img className="botImg" src="/img/IdiotBot.png" alt="IdiotBot" /></td>
            <td>922</td>
            <td className="green">+{922 - 863}</td>
            <td>{3 - 1}</td>
            <td>{8 - 4}</td>
            <td>{10 - 9}</td>
          </tr>
          <tr>
            <td>22</td>
            <td className='red'>-5</td>
            <td>5x Random Bot</td>
            <td><img className="botImg" src="/img/5xRandomBot.png" alt="FiveXRandomBot" /></td>
            <td>909</td>
            <td className="red">{909 - 973}</td>
            <td>{5 - 3}</td>
            <td>{7 - 6}</td>
            <td>{9 - 5}</td>
          </tr>
          <tr>
            <td>23</td>
            <td className='red'>-3</td>
            <td>Bot Ross</td>
            <td><img className="botImg" src="/img/BotRoss.png" alt="BotRoss" /></td>
            <td>865</td>
            <td className="red">{865 - 949}</td>
            <td>{1 - 1}</td>
            <td>{8 - 4}</td>
            <td>{5 - 2}</td>
          </tr>
          <tr>
            <td>24</td>
            <td className='red'>-6</td>
            <td>Random Bot</td>
            <td><img className="botImg" src="/img/RandomBot.png" alt="RandomBot" /></td>
            <td>859</td>
            <td className="red">{859 - 969}</td>
            <td>{2 - 2}</td>
            <td>{6 - 3}</td>
            <td>{6 - 2}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Season3;