import '../App.css'
import { useEffect, useState } from "react";

function Season4() {

  return (
    <>
      <h1>Season 4</h1>
      <table id="seasonTable">
        <tbody>
          <tr>
            <th>Bot</th>
            <th>Profile</th>
            <th>Elo</th>
            <th>+/-</th>
            <th>Wins</th>
            <th>Draws</th>
            <th>Losses</th>
          </tr>
          <tr>
            <td>G2 E-Bot</td>
            <td><img className="botImg" src="/img/G2-EBot.png" alt="G2EBot" /></td>
            <td>1254</td>
            <td className="green">+{1254 - 1159}</td>
            <td>{15 - 10}</td>
            <td>{3 - 1}</td>
            <td>{3 - 3}</td>
          </tr>
          <tr>
            <td>Two Move Bot</td>
            <td><img className="botImg" src="/img/TwoMoveBot.png" alt="TwoMoveBot" /></td>
            <td>1191</td>
            <td className="green">+{1191 - 1111}</td>
            <td>{10 - 5}</td>
            <td>{2 - 2}</td>
            <td>{2 - 0}</td>
          </tr>
          <tr>
            <td>Botnia and Herzebotvina</td>
            <td><img className="botImg" src="/img/BotniaAndHerzebotvina.png" alt="BotniaAndHerzebotvina" /></td>
            <td>1172</td>
            <td className="green">+{1172 - 1000}</td>
            <td>{7 - 0}</td>
            <td>{0 - 0}</td>
            <td>{0 - 0}</td>
          </tr>
          <tr>
            <td>Bottus Maximus</td>
            <td><img className="botImg" src="/img/BottusMaximus.png" alt="BottusMaximus" /></td>
            <td>1167</td>
            <td className="green">+{1167 - 1131}</td>
            <td>{11 - 8}</td>
            <td>{14 - 11}</td>
            <td>{3 - 2}</td>
          </tr>
          <tr>
            <td>Bloodbot</td>
            <td><img className="botImg" src="/img/Bloodbot.png" alt="Bloodbot" /></td>
            <td>1115</td>
            <td className="red">{1115 - 1192}</td>
            <td>{13 - 11}</td>
            <td>{10 - 8}</td>
            <td>{5 - 2}</td>
          </tr>
          <tr>
            <td>Thinking Bot</td>
            <td><img className="botImg" src="/img/ThinkingBot.png" alt="ThinkingBot" /></td>
            <td>1101</td>
            <td className="green">+{1101 - 996}</td>
            <td>{9 - 3}</td>
            <td>{1 - 1}</td>
            <td>{4 - 3}</td>
          </tr>
          <tr>
            <td>Assassin Bot</td>
            <td><img className="botImg" src="/img/AssassinBot.png" alt="AssassinBot" /></td>
            <td>1094</td>
            <td className="green">+{1094 - 1042}</td>
            <td>{14 - 10}</td>
            <td>{4 - 4}</td>
            <td>{10 - 7}</td>
          </tr>
          <tr>
            <td>Laser Bot</td>
            <td><img className="botImg" src="/img/LaserBot.png" alt="LaserBot" /></td>
            <td>1080</td>
            <td className="green">+{1080 - 1000}</td>
            <td>{5 - 0}</td>
            <td>{0 - 0}</td>
            <td>{2 - 0}</td>
          </tr>
          <tr>
            <td>Kamikaze Bot</td>
            <td><img className="botImg" src="/img/KamikazeBot.png" alt="KamikazeBot" /></td>
            <td>1058</td>
            <td className="yellow">{1058 - 1058}</td>
            <td>{7 - 5}</td>
            <td>{6 - 4}</td>
            <td>{8 - 3}</td>
          </tr>
          <tr>
            <td>Restrictor Bot</td>
            <td><img className="botImg" src="/img/RestrictorBot.png" alt="RestrictorBot" /></td>
            <td>1056</td>
            <td className="green">+{1056 - 995}</td>
            <td>{6 - 2}</td>
            <td>{5 - 3}</td>
            <td>{3 - 2}</td>
          </tr>
          <tr>
            <td>Savage Beastbot</td>
            <td><img className="botImg" src="/img/SavageBeastBot.png" alt="SavageBeastBot" /></td>
            <td>1013</td>
            <td className="green">+{1013 - 957}</td>
            <td>{5 - 2}</td>
            <td>{10 - 7}</td>
            <td>{6 - 5}</td>
          </tr>
          <tr>
            <td>Christopher Columbot</td>
            <td><img className="botImg" src="/img/ChristopherColumbot.png" alt="ChristopherColumbot" /></td>
            <td>1013</td>
            <td className="red">{1013 - 1113}</td>
            <td>{6 - 5}</td>
            <td>{2 - 1}</td>
            <td>{16 - 1}</td>
          </tr>
          <tr>
            <td>BOTential</td>
            <td><img className="botImg" src="/img/BOTential.png" alt="BOTential" /></td>
            <td>1005</td>
            <td className="green">+{1005 - 965}</td>
            <td>{10 - 7}</td>
            <td>{8 - 6}</td>
            <td>{10 - 8}</td>
          </tr>
          <tr>
            <td>Hitman Bot</td>
            <td><img className="botImg" src="/img/HitmanBot.png" alt="HitmanBot" /></td>
            <td>994</td>
            <td className="red">{994 - 1000}</td>
            <td>{6 - 3}</td>
            <td>{2 - 1}</td>
            <td>{6 - 3}</td>
          </tr>
          <tr>
            <td>Pawn Bot</td>
            <td><img className="botImg" src="/img/PawnBot.png" alt="PawnBot" /></td>
            <td>987</td>
            <td className="red">{987 - 991}</td>
            <td>{11 - 8}</td>
            <td>{6 - 5}</td>
            <td>{11 - 8}</td>
          </tr>
          <tr>
            <td>One Move Bot</td>
            <td><img className="botImg" src="/img/OneMoveBot.png" alt="OneMoveBot" /></td>
            <td>985</td>
            <td className="red">{985 - 1071}</td>
            <td>{8 - 7}</td>
            <td>{3 - 3}</td>
            <td>{10 - 4}</td>
          </tr>









          
          
          <tr>
            <td>Adventurous King Bot</td>
            <td><img className="botImg" src="/img/AdventurousKingBot.png" alt="AdventurousKingBot" /></td>
            <td>981</td>
            <td className="green">+{981 - 942}</td>
            <td>{4 - 1}</td>
            <td>{7 - 4}</td>
            <td>{3 - 2}</td>
          </tr>
          <tr>
            <td>One Piece Random Bot</td>
            <td><img className="botImg" src="/img/OnePieceRandomBot.png" alt="OnePieceRandomBot" /></td>
            <td>974</td>
            <td className="red">{974 - 1017}</td>
            <td>{4 - 3}</td>
            <td>{4 - 2}</td>
            <td>{6 - 2}</td>
          </tr>
          <tr>
            <td>Equality Bot</td>
            <td><img className="botImg" src="/img/EqualityBot.png" alt="EqualityBot" /></td>
            <td>932</td>
            <td className="red">{932 - 1000}</td>
            <td>{0 - 0}</td>
            <td>{4 - 0}</td>
            <td>{3 - 0}</td>
          </tr>
          <tr>
            <td>Botdefender</td>
            <td><img className="botImg" src="/img/BotDefender.png" alt="Botdefender" /></td>
            <td>929</td>
            <td className="red">{929 - 1000}</td>
            <td>{0 - 0}</td>
            <td>{4 - 0}</td>
            <td>{3 - 0}</td>
          </tr>
          <tr>
            <td>Shield Bot</td>
            <td><img className="botImg" src="/img/ShieldBot.png" alt="ShieldBot" /></td>
            <td>917</td>
            <td className="green">+{924 - 917}</td>
            <td>{4 - 2}</td>
            <td>{9 - 6}</td>
            <td>{8 - 6}</td>
          </tr>
          <tr>
            <td>Abilibot</td>
            <td><img className="botImg" src="/img/Abilibot.png" alt="Abilibot" /></td>
            <td>924</td>
            <td className="red">{924 - 1000}</td>
            <td>{1 - 0}</td>
            <td>{2 - 0}</td>
            <td>{4 - 0}</td>
          </tr>
          <tr>
            <td>Idiot Bot</td>
            <td><img className="botImg" src="/img/IdiotBot.png" alt="IdiotBot" /></td>
            <td>922</td>
            <td className="green">+{922 - 863}</td>
            <td>{3 - 1}</td>
            <td>{8 - 4}</td>
            <td>{10 - 9}</td>
          </tr>
          <tr>
            <td>5x Random Bot</td>
            <td><img className="botImg" src="/img/5xRandomBot.png" alt="FiveXRandomBot" /></td>
            <td>909</td>
            <td className="red">{909 - 973}</td>
            <td>{5 - 3}</td>
            <td>{7 - 6}</td>
            <td>{9 - 5}</td>
          </tr>
          <tr>
            <td>Bot Ross</td>
            <td><img className="botImg" src="/img/BotRoss.png" alt="BotRoss" /></td>
            <td>865</td>
            <td className="red">{865 - 949}</td>
            <td>{1 - 1}</td>
            <td>{8 - 4}</td>
            <td>{5 - 2}</td>
          </tr>
          <tr>
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

export default Season4;