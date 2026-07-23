import '../App.css'
import { useEffect, useState } from "react";

function Season2() {

  return (
    <>
      <h1>Season 2</h1>
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
            <td>Bloodbot</td>
            <td><img className="botImg" src="/img/Bloodbot.png" alt="Bloodbot" /></td>
            <td>1109</td>
            <td className="red">{1109 - 1110}</td>
            <td>{7 - 3}</td>
            <td>{5 - 3}</td>
            <td>{2 - 1}</td>
          </tr>
          <tr>
            <td>Assassin Bot</td>
            <td><img className="botImg" src="/img/AssassinBot.png" alt="AssassinBot" /></td>
            <td>1107</td>
            <td className="green">+{1107 - 1086}</td>
            <td>{8 - 5}</td>
            <td>{3 - 1}</td>
            <td>{3 - 1}</td>
          </tr>
          <tr>
            <td>G2 E-Bot</td>
            <td><img className="botImg" src="/img/G2-EBot.png" alt="G2EBot" /></td>
            <td>1095</td>
            <td className="green">+{1095 - 1000}</td>
            <td>{5 - 0}</td>
            <td>{0 - 0}</td>
            <td>{2 - 0}</td>
          </tr>
          <tr>
            <td>Bottus Maximus</td>
            <td><img className="botImg" src="/img/BottusMaximus.png" alt="BottusMaximus" /></td>
            <td>1085</td>
            <td className="green">+{1085 - 1054}</td>
            <td>{5 - 3}</td>
            <td>{8 - 3}</td>
            <td>{1 - 1}</td>
          </tr>
          <tr>
            <td>BOTential</td>
            <td><img className="botImg" src="/img/BOTential.png" alt="BOTential" /></td>
            <td>1050</td>
            <td className="green">+{1050 - 974}</td>
            <td>{6 - 2}</td>
            <td>{4 - 2}</td>
            <td>{4 - 3}</td>
          </tr>
          <tr>
            <td>Pawn Bot</td>
            <td><img className="botImg" src="/img/PawnBot.png" alt="PawnBot" /></td>
            <td>1031</td>
            <td className="red">{1031 - 1070}</td>
            <td>{6 - 4}</td>
            <td>{4 - 2}</td>
            <td>{4 - 1}</td>
          </tr>
          <tr>
            <td>Kamikaze Bot</td>
            <td><img className="botImg" src="/img/KamikazeBot.png" alt="KamikazeBot" /></td>
            <td>1018</td>
            <td className="green">+{1018 - 1000}</td>
            <td>{2 - 0}</td>
            <td>{3 - 0}</td>
            <td>{2 - 0}</td>
          </tr>
          <tr>
            <td>One Piece Random Bot</td>
            <td><img className="botImg" src="/img/OnePieceRandomBot.png" alt="OnePieceRandomBot" /></td>
            <td>1017</td>
            <td className="green">+{1017 - 1000}</td>
            <td>{3 - 0}</td>
            <td>{2 - 0}</td>
            <td>{2 - 0}</td>
          </tr>
          <tr>
            <td>5x Random Bot</td>
            <td><img className="botImg" src="/img/5xRandomBot.png" alt="FiveXRandomBot" /></td>
            <td>973</td>
            <td className="green">+{973 - 928}</td>
            <td>{3 - 1}</td>
            <td>{6 - 2}</td>
            <td>{5 - 4}</td>
          </tr>
          <tr>
            <td>Random Bot</td>
            <td><img className="botImg" src="/img/RandomBot.png" alt="RandomBot" /></td>
            <td>969</td>
            <td className="red">{969 - 1000}</td>
            <td>{2 - 0}</td>
            <td>{3 - 0}</td>
            <td>{2 - 0}</td>
          </tr>
          <tr>
            <td>One Move Bot</td>
            <td><img className="botImg" src="/img/OneMoveBot.png" alt="OneMoveBot" /></td>
            <td>965</td>
            <td className="red">{965 - 1000}</td>
            <td>{2 - 0}</td>
            <td>{1 - 0}</td>
            <td>{4 - 0}</td>
          </tr>
          <tr>
            <td>Bot Ross</td>
            <td><img className="botImg" src="/img/BotRoss.png" alt="BotRoss" /></td>
            <td>949</td>
            <td className="red">{949 - 1000}</td>
            <td>{1 - 0}</td>
            <td>{4 - 0}</td>
            <td>{2 - 0}</td>
          </tr>
          <tr>
            <td>Adventurous King Bot</td>
            <td><img className="botImg" src="/img/AdventurousKingBot.png" alt="AdventurousKingBot" /></td>
            <td>942</td>
            <td className="red">{942 - 1000}</td>
            <td>{1 - 0}</td>
            <td>{4 - 0}</td>
            <td>{2 - 0}</td>
          </tr>
          <tr>
            <td>Shield Bot</td>
            <td><img className="botImg" src="/img/ShieldBot.png" alt="ShieldBot" /></td>
            <td>917</td>
            <td className="red">{917 - 924}</td>
            <td>{2 - 1}</td>
            <td>{6 - 2}</td>
            <td>{6 - 4}</td>
          </tr>
          <tr>
            <td>Savage Beastbot</td>
            <td><img className="botImg" src="/img/SavageBeastBot.png" alt="SavageBeastBot" /></td>
            <td>910</td>
            <td className="red">{910 - 1000}</td>
            <td>{0 - 0}</td>
            <td>{3 - 0}</td>
            <td>{4 - 0}</td>
          </tr>
          <tr>
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