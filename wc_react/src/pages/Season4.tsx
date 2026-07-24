import '../App.css'
import { useEffect, useState } from "react";
import PageButton from '../Button';

function Season4() {

  return (
    <>
      <PageButton/>
      <h1>Season 4</h1>
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
            <td className='green'>+1</td>
            <td>G2 E-Bot</td>
            <td><img className="botImg" src="/img/G2-EBot.png" alt="G2EBot" /></td>
            <td>1254</td>
            <td className="green">+{1254 - 1159}</td>
            <td>{15 - 10}</td>
            <td>{3 - 1}</td>
            <td>{3 - 3}</td>
          </tr>
          <tr>
            <td>2</td>
            <td className='green'>+3</td>
            <td>Two Move Bot</td>
            <td><img className="botImg" src="/img/TwoMoveBot.png" alt="TwoMoveBot" /></td>
            <td>1191</td>
            <td className="green">+{1191 - 1111}</td>
            <td>{10 - 5}</td>
            <td>{2 - 2}</td>
            <td>{2 - 0}</td>
          </tr>
          <tr>
            <td>3</td>
            <td className='yellow'>New</td>
            <td>Botnia and Herzebotvina</td>
            <td><img className="botImg" src="/img/BotniaAndHerzebotvina.png" alt="BotniaAndHerzebotvina" /></td>
            <td>1172</td>
            <td className="green">+{1172 - 1000}</td>
            <td>{7 - 0}</td>
            <td>{0 - 0}</td>
            <td>{0 - 0}</td>
          </tr>
          <tr>
            <td>4</td>
            <td className='yellow'>0</td>
            <td>Bottus Maximus</td>
            <td><img className="botImg" src="/img/BottusMaximus.png" alt="BottusMaximus" /></td>
            <td>1167</td>
            <td className="green">+{1167 - 1131}</td>
            <td>{11 - 8}</td>
            <td>{14 - 11}</td>
            <td>{3 - 2}</td>
          </tr>
          <tr>
            <td>5</td>
            <td className='red'>-3</td>
            <td>Bloodbot</td>
            <td><img className="botImg" src="/img/Bloodbot.png" alt="Bloodbot" /></td>
            <td>1115</td>
            <td className="red">{1115 - 1192}</td>
            <td>{13 - 11}</td>
            <td>{10 - 8}</td>
            <td>{5 - 2}</td>
          </tr>
          <tr>
            <td>6</td>
            <td className='green'>+5</td>
            <td>Thinking Bot</td>
            <td><img className="botImg" src="/img/ThinkingBot.png" alt="ThinkingBot" /></td>
            <td>1101</td>
            <td className="green">+{1101 - 996}</td>
            <td>{9 - 3}</td>
            <td>{1 - 1}</td>
            <td>{4 - 3}</td>
          </tr>
          <tr>
            <td>7</td>
            <td className='green'>+2</td>
            <td>Assassin Bot</td>
            <td><img className="botImg" src="/img/AssassinBot.png" alt="AssassinBot" /></td>
            <td>1094</td>
            <td className="green">+{1094 - 1042}</td>
            <td>{14 - 10}</td>
            <td>{4 - 4}</td>
            <td>{10 - 7}</td>
          </tr>
          <tr>
            <td>8</td>
            <td className='yellow'>New</td>
            <td>Laser Bot</td>
            <td><img className="botImg" src="/img/LaserBot.png" alt="LaserBot" /></td>
            <td>1080</td>
            <td className="green">+{1080 - 1000}</td>
            <td>{5 - 0}</td>
            <td>{0 - 0}</td>
            <td>{2 - 0}</td>
          </tr>
          <tr>
            <td>9</td>
            <td className='yellow'>0</td>
            <td>Kamikaze Bot</td>
            <td><img className="botImg" src="/img/KamikazeBot.png" alt="KamikazeBot" /></td>
            <td>1058</td>
            <td className="yellow">{1058 - 1058}</td>
            <td>{7 - 5}</td>
            <td>{6 - 4}</td>
            <td>{8 - 5}</td>
          </tr>
          <tr>
            <td>10</td>
            <td className='green'>+3</td>
            <td>Restrictor Bot</td>
            <td><img className="botImg" src="/img/RestrictorBot.png" alt="RestrictorBot" /></td>
            <td>1056</td>
            <td className="green">+{1056 - 995}</td>
            <td>{6 - 2}</td>
            <td>{5 - 3}</td>
            <td>{3 - 2}</td>
          </tr>
          <tr>
            <td>11</td>
            <td className='green'>+7</td>
            <td>Savage Beastbot</td>
            <td><img className="botImg" src="/img/SavageBeastBot.png" alt="SavageBeastBot" /></td>
            <td>1013</td>
            <td className="green">+{1013 - 957}</td>
            <td>{5 - 2}</td>
            <td>{10 - 7}</td>
            <td>{6 - 5}</td>
          </tr>
          <tr>
            <td>12</td>
            <td className='red'>-6</td>
            <td>Christopher Columbot</td>
            <td><img className="botImg" src="/img/ChristopherColumbot.png" alt="ChristopherColumbot" /></td>
            <td>1013</td>
            <td className="red">{1013 - 1113}</td>
            <td>{6 - 5}</td>
            <td>{2 - 1}</td>
            <td>{6 - 1}</td>
          </tr>
          <tr>
            <td>13</td>
            <td className='green'>+4</td>
            <td>BOTential</td>
            <td><img className="botImg" src="/img/BOTential.png" alt="BOTential" /></td>
            <td>1005</td>
            <td className="green">+{1005 - 965}</td>
            <td>{10 - 7}</td>
            <td>{8 - 6}</td>
            <td>{10 - 8}</td>
          </tr>
          <tr>
            <td>14</td>
            <td className='red'>-3</td>
            <td>Hitman Bot</td>
            <td><img className="botImg" src="/img/HitmanBot.png" alt="HitmanBot" /></td>
            <td>994</td>
            <td className="red">{994 - 1000}</td>
            <td>{6 - 3}</td>
            <td>{2 - 1}</td>
            <td>{6 - 3}</td>
          </tr>
          <tr>
            <td>15</td>
            <td className='red'>-1</td>
            <td>Pawn Bot</td>
            <td><img className="botImg" src="/img/PawnBot.png" alt="PawnBot" /></td>
            <td>987</td>
            <td className="red">{987 - 991}</td>
            <td>{11 - 8}</td>
            <td>{6 - 5}</td>
            <td>{11 - 8}</td>
          </tr>
          <tr>
            <td>16</td>
            <td className='red'>-8</td>
            <td>One Move Bot</td>
            <td><img className="botImg" src="/img/OneMoveBot.png" alt="OneMoveBot" /></td>
            <td>985</td>
            <td className="red">{985 - 1071}</td>
            <td>{8 - 7}</td>
            <td>{3 - 3}</td>
            <td>{10 - 4}</td>
          </tr>
          <tr>
            <td>17</td>
            <td className='yellow'>New</td>
            <td>Migrating Bot</td>
            <td><img className="botImg" src="/img/MigratingBot.png" alt="MigratingBot" /></td>
            <td>985</td>
            <td className="red">{985 - 1000}</td>
            <td>{2 - 0}</td>
            <td>{2 - 0}</td>
            <td>{3 - 0}</td>
          </tr>
          <tr>
            <td>18</td>
            <td className='yellow'>New</td>
            <td>Marching Bot</td>
            <td><img className="botImg" src="/img/MarchingBot.png" alt="MarchingBot" /></td>
            <td>975</td>
            <td className="red">{975 - 1000}</td>
            <td>{2 - 0}</td>
            <td>{2 - 0}</td>
            <td>{3 - 0}</td>
          </tr>
          <tr>
            <td>19</td>
            <td className='green'>+3</td>
            <td>Botdefender</td>
            <td><img className="botImg" src="/img/BotDefender.png" alt="Botdefender" /></td>
            <td>969</td>
            <td className="green">+{969 - 929}</td>
            <td>{2 - 0}</td>
            <td>{9 - 4}</td>
            <td>{3 - 3}</td>
          </tr>
          <tr>
            <td>20</td>
            <td className='red'>-2</td>
            <td>One Piece Random Bot</td>
            <td><img className="botImg" src="/img/OnePieceRandomBot.png" alt="OnePieceRandomBot" /></td>
            <td>959</td>
            <td className="red">{959 - 974}</td>
            <td>{6 - 4}</td>
            <td>{6 - 4}</td>
            <td>{9 - 6}</td>
          </tr>
          <tr>
            <td>21</td>
            <td className='green'>+7</td>
            <td>Random Bot</td>
            <td><img className="botImg" src="/img/RandomBot.png" alt="RandomBot" /></td>
            <td>957</td>
            <td className="green">+{957 - 859}</td>
            <td>{6 - 2}</td>
            <td>{8 - 6}</td>
            <td>{7 - 6}</td>
          </tr>
          <tr>
            <td>22</td>
            <td className='red'>-1</td>
            <td>Equality Bot</td>
            <td><img className="botImg" src="/img/EqualityBot.png" alt="EqualityBot" /></td>
            <td>946</td>
            <td className="green">+{946 - 932}</td>
            <td>{2 - 0}</td>
            <td>{8 - 4}</td>
            <td>{4 - 3}</td>
          </tr>
          <tr>
            <td>23</td>
            <td className='yellow'>New</td>
            <td>Counting Bot</td>
            <td><img className="botImg" src="/img/CountingBot.png" alt="CountingBot" /></td>
            <td>940</td>
            <td className="red">{940 - 1000}</td>
            <td>{0 - 0}</td>
            <td>{4 - 0}</td>
            <td>{3 - 0}</td>
          </tr>
          <tr>
            <td>24</td>
            <td className='yellow'>New</td>
            <td>Botfish</td>
            <td><img className="botImg" src="/img/Botfish.png" alt="Botfish" /></td>
            <td>928</td>
            <td className="red">{928 - 1000}</td>
            <td>{1 - 0}</td>
            <td>{2 - 0}</td>
            <td>{4 - 0}</td>
          </tr>
          <tr>
            <td>25</td>
            <td className='yellow'>New</td>
            <td>Bots United</td>
            <td><img className="botImg" src="/img/BotsUtd.png" alt="BotsUtd" /></td>
            <td>926</td>
            <td className="red">{926 - 1000}</td>
            <td>{2 - 0}</td>
            <td>{1 - 0}</td>
            <td>{4 - 0}</td>
          </tr>
          <tr>
            <td>26</td>
            <td className='yellow'>0</td>
            <td>Shield Bot</td>
            <td><img className="botImg" src="/img/ShieldBot.png" alt="ShieldBot" /></td>
            <td>924</td>
            <td className="yellow">{924 - 924}</td>
            <td>{5 - 4}</td>
            <td>{14 - 9}</td>
            <td>{9 - 8}</td>
          </tr>
          <tr>
            <td>27</td>
            <td className='yellow'>0</td>
            <td>Abilibot</td>
            <td><img className="botImg" src="/img/Abilibot.png" alt="Abilibot" /></td>
            <td>919</td>
            <td className="red">{919 - 924}</td>
            <td>{1 - 1}</td>
            <td>{9 - 2}</td>
            <td>{4 - 4}</td>
          </tr>
          <tr>
            <td>28</td>
            <td className='red'>-8</td>
            <td>Adventurous King Bot</td>
            <td><img className="botImg" src="/img/AdventurousKingBot.png" alt="AdventurousKingBot" /></td>
            <td>898</td>
            <td className="red">{898 - 981}</td>
            <td>{4 - 4}</td>
            <td>{10 - 7}</td>
            <td>{7 - 3}</td>
          </tr>
          <tr>
            <td>29</td>
            <td className='green'>+1</td>
            <td>Bot Ross</td>
            <td><img className="botImg" src="/img/BotRoss.png" alt="BotRoss" /></td>
            <td>884</td>
            <td className="green">+{884 - 865}</td>
            <td>{2 - 1}</td>
            <td>{13 - 8}</td>
            <td>{6 - 5}</td>
          </tr>
          <tr>
            <td>30</td>
            <td className='red'>-1</td>
            <td>5x Random Bot</td>
            <td><img className="botImg" src="/img/5xRandomBot.png" alt="FiveXRandomBot" /></td>
            <td>854</td>
            <td className="red">{854 - 909}</td>
            <td>{6 - 5}</td>
            <td>{10 - 7}</td>
            <td>{12 - 9}</td>
          </tr>
          <tr>
            <td>31</td>
            <td className='yellow'>New</td>
            <td>Lobotomy</td>
            <td><img className="botImg" src="/img/Lobotomy.png" alt="Lobotomy" /></td>
            <td>840</td>
            <td className="red">{840 - 1000}</td>
            <td>{0 - 0}</td>
            <td>{1 - 0}</td>
            <td>{6 - 0}</td>
          </tr>
          <tr>
            <td>32</td>
            <td className='red'>-3</td>
            <td>Idiot Bot</td>
            <td><img className="botImg" src="/img/IdiotBot.png" alt="IdiotBot" /></td>
            <td>811</td>
            <td className="red">{811 - 922}</td>
            <td>{3 - 3}</td>
            <td>{11 - 8}</td>
            <td>{14 - 10}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Season4;