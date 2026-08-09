import '../App.css'
import PageButton from '../Button';

function formatPositions(currentPos: number, lastSeasonPos: number) {
  let color: string = 'yellow';
  if (lastSeasonPos - currentPos > 0) {
    color = 'green';
  }
  else if (currentPos - lastSeasonPos > 0) {
    color = 'red';
  }
  return (
    <td className={color}>{color == 'green' ? '+' : ''}{lastSeasonPos - currentPos}</td>
  );
}

function formatEloGain(currentElo: number, lastSeasonElo: number) {
  let color: string = 'yellow';
  if (lastSeasonElo - currentElo < 0) {
    color = 'green';
  }
  else if (currentElo - lastSeasonElo < 0) {
    color = 'red';
  }
  return (
    <td className={color}>{color == 'green' ? '+' : ''}{currentElo - lastSeasonElo}</td>
  );
}

function Season5() {

  return (
    <>
      <PageButton/>
      <h2>Season 5</h2>
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
            {formatPositions(1, 3)}
            <td>Botnia and Herzebotvina</td>
            <td><img className="botImg" src="/img/BotniaAndHerzebotvina.png" alt="BotniaAndHerzebotvina" /></td>
            <td>1247</td>
            {formatEloGain(1247, 1172)}
            <td>{12 - 7}</td>
            <td>{0 - 0}</td>
            <td>{2 - 0}</td>
          </tr>
          <tr>
            <td>2</td>
            {formatPositions(2, 2)}
            <td>Two Move Bot</td>
            <td><img className="botImg" src="/img/TwoMoveBot.png" alt="TwoMoveBot" /></td>
            <td>1204</td>
            {formatEloGain(1204, 1191)}
            <td>{14 - 10}</td>
            <td>{2 - 2}</td>
            <td>{5 - 2}</td>
          </tr>
          <tr>
            <td>3</td>
            {formatPositions(3, 6)}
            <td>Thinking Bot</td>
            <td><img className="botImg" src="/img/ThinkingBot.png" alt="ThinkingBot" /></td>
            <td>1172</td>
            {formatEloGain(1172, 1101)}
            <td>{14 - 9}</td>
            <td>{1 - 1}</td>
            <td>{6 - 4}</td>
          </tr>
          <tr>
            <td>4</td>
            {formatPositions(4, 5)}
            <td>Bloodbot</td>
            <td><img className="botImg" src="/img/Bloodbot.png" alt="Bloodbot" /></td>
            <td>1166</td>
            {formatEloGain(1166, 1115)}
            <td>{17 - 13}</td>
            <td>{10 - 10}</td>
            <td>{8 - 5}</td>
          </tr>
          <tr>
            <td>5</td>
            {formatPositions(5, 9)}
            <td>Kamikaze Bot</td>
            <td><img className="botImg" src="/img/KamikazeBot.png" alt="KamikazeBot" /></td>
            <td>1129</td>
            {formatEloGain(1129, 1058)}
            <td>{12 - 7}</td>
            <td>{7 - 6}</td>
            <td>{9 - 8}</td>
          </tr>
          <tr>
            <td>6</td>
            {formatPositions(6, 7)}
            <td>Assassin Bot</td>
            <td><img className="botImg" src="/img/AssassinBot.png" alt="AssassinBot" /></td>
            <td>1108</td>
            {formatEloGain(1108, 1094)}
            <td>{17 - 14}</td>
            <td>{5 - 4}</td>
            <td>{13 - 10}</td>
          </tr>
          <tr>
            <td>7</td>
            {formatPositions(7, 1)}
            <td>G2 E-Bot</td>
            <td><img className="botImg" src="/img/G2-EBot.png" alt="G2EBot" /></td>
            <td>1106</td>
            {formatEloGain(1106, 1254)}
            <td>{16 - 15}</td>
            <td>{4 - 3}</td>
            <td>{8 - 3}</td>
          </tr>
          <tr>
            <td>8</td>
            <td className='yellow'>New</td>
            <td>Bot 618</td>
            <td><img className="botImg" src="/img/Bot618.png" alt="Bot618" /></td>
            <td>1105</td>
            {formatEloGain(1105, 1000)}
            <td>{4 - 0}</td>
            <td>{3 - 0}</td>
            <td>{0 - 0}</td>
          </tr>
          <tr>
            <td>9</td>
            <td className='yellow'>New</td>
            <td>Botkrieg</td>
            <td><img className="botImg" src="/img/Botkrieg.png" alt="Botkrieg" /></td>
            <td>1093</td>
            {formatEloGain(1093, 1000)}
            <td>{5 - 0}</td>
            <td>{0 - 0}</td>
            <td>{2 - 0}</td>
          </tr>
          <tr>
            <td>10</td>
            {formatPositions(8, 22)}
            <td>Equality Bot</td>
            <td><img className="botImg" src="/img/EqualityBot.png" alt="EqualityBot" /></td>
            <td>1092</td>
            {formatEloGain(1092, 946)}
            <td>{8 - 2}</td>
            <td>{9 - 8}</td>
            <td>{4 - 4}</td>
          </tr>
          <tr>
            <td>11</td>
            {formatPositions(9, 4)}
            <td>Bottus Maximus</td>
            <td><img className="botImg" src="/img/BottusMaximus.png" alt="BottusMaximus" /></td>
            <td>1088</td>
            {formatEloGain(1088, 1167)}
            <td>{11 - 11}</td>
            <td>{14 - 14}</td>
            <td>{3 - 2}</td>
          </tr>
          <tr>
            <td>12</td>
            {formatPositions(10, 8)}
            <td>Laser Bot</td>
            <td><img className="botImg" src="/img/LaserBot.png" alt="LaserBot" /></td>
            <td>1083</td>
            {formatEloGain(1083, 1080)}
            <td>{7 - 5}</td>
            <td>{2 - 0}</td>
            <td>{5 - 2}</td>
          </tr>
          <tr>
            <td>13</td>
            {formatPositions(11, 11)}
            <td>Savage Beastbot</td>
            <td><img className="botImg" src="/img/SavageBeastBot.png" alt="SavageBeastBot" /></td>
            <td>1077</td>
            {formatEloGain(1077, 1013)}
            <td>{9 - 5}</td>
            <td>{11 - 10}</td>
            <td>{8 - 6}</td>
          </tr>
          <tr>
            <td>14</td>
            <td className='yellow'>New</td>
            <td>Thinking Bot II</td>
            <td><img className="botImg" src="/img/ThinkingBotII.png" alt="ThinkingBotII" /></td>
            <td>1072</td>
            {formatEloGain(1072, 1000)}
            <td>{4 - 0}</td>
            <td>{1 - 0}</td>
            <td>{2 - 0}</td>
          </tr>
          <tr>
            <td>15</td>
            {formatPositions(12, 12)}
            <td>Christopher Columbot</td>
            <td><img className="botImg" src="/img/ChristopherColumbot.png" alt="ChristopherColumbot" /></td>
            <td>1071</td>
            {formatEloGain(1071, 1013)}
            <td>{11 - 6}</td>
            <td>{2 - 2}</td>
            <td>{8 - 6}</td>
          </tr>
          <tr>
            <td>16</td>
            {formatPositions(13, 17)}
            <td>Migrating Bot</td>
            <td><img className="botImg" src="/img/MigratingBot.png" alt="MigratingBot" /></td>
            <td>1045</td>
            {formatEloGain(1045, 985)}
            <td>{7 - 2}</td>
            <td>{2 - 2}</td>
            <td>{5 - 3}</td>
          </tr>
          <tr>
            <td>17</td>
            <td className='yellow'>New</td>
            <td>Balance Bot</td>
            <td><img className="botImg" src="/img/BalanceBot.png" alt="BalanceBot" /></td>
            <td>1024</td>
            {formatEloGain(1024, 1000)}
            <td>{3 - 0}</td>
            <td>{2 - 0}</td>
            <td>{2 - 0}</td>
          </tr>
          <tr>
            <td>18</td>
            {formatPositions(14, 14)}
            <td>Hitman Bot</td>
            <td><img className="botImg" src="/img/HitmanBot.png" alt="HitmanBot" /></td>
            <td>1019</td>
            {formatEloGain(1019, 994)}
            <td>{8 - 6}</td>
            <td>{6 - 2}</td>
            <td>{7 - 3}</td>
          </tr>
          <tr>
            <td>19</td>
            {formatPositions(15, 23)}
            <td>Counting Bot</td>
            <td><img className="botImg" src="/img/CountingBot.png" alt="CountingBot" /></td>
            <td>1007</td>
            {formatEloGain(1007, 940)}
            <td>{4 - 0}</td>
            <td>{5 - 4}</td>
            <td>{5 - 3}</td>
          </tr>
          <tr>
            <td>20</td>
            {formatPositions(16, 15)}
            <td>Pawn Bot</td>
            <td><img className="botImg" src="/img/PawnBot.png" alt="PawnBot" /></td>
            <td>1000</td>
            {formatEloGain(1000, 987)}
            <td>{14 - 11}</td>
            <td>{8 - 6}</td>
            <td>{13 - 11}</td>
          </tr>
          <tr>
            <td>21</td>
            {formatPositions(17, 25)}
            <td>Bots United</td>
            <td><img className="botImg" src="/img/BotsUtd.png" alt="BotsUtd" /></td>
            <td>999</td>
            {formatEloGain(999, 926)}
            <td>{6 - 2}</td>
            <td>{3 - 1}</td>
            <td>{5 - 4}</td>
          </tr>
          <tr>
            <td>22</td>
            {formatPositions(18, 16)}
            <td>One Move Bot</td>
            <td><img className="botImg" src="/img/OneMoveBot.png" alt="OneMoveBot" /></td>
            <td>991</td>
            {formatEloGain(991, 985)}
            <td>{11 - 8}</td>
            <td>{4 - 3}</td>
            <td>{13 - 10}</td>
          </tr>
          <tr>
            <td>23</td>
            <td className='yellow'>New</td>
            <td>Speedrunner Bot</td>
            <td><img className="botImg" src="/img/SpeedRunnerBot.png" alt="SpeedrunnerBot" /></td>
            <td>974</td>
            {formatEloGain(974, 1000)}
            <td>{0 - 0}</td>
            <td>{6 - 0}</td>
            <td>{1 - 0}</td>
          </tr>
          <tr>
            <td>24</td>
            {formatPositions(19, 27)}
            <td>Abilibot</td>
            <td><img className="botImg" src="/img/Abilibot.png" alt="Abilibot" /></td>
            <td>972</td>
            {formatEloGain(972, 919)}
            <td>{5 - 1}</td>
            <td>{11 - 9}</td>
            <td>{5 - 4}</td>
          </tr>
          <tr>
            <td>25</td>
            <td className='yellow'>New</td>
            <td>Bot With a Plot</td>
            <td><img className="botImg" src="/img/BotWithAPlot.png" alt="BotWithAPlot" /></td>
            <td>967</td>
            {formatEloGain(967, 1000)}
            <td>{1 - 0}</td>
            <td>{3 - 0}</td>
            <td>{3 - 0}</td>
          </tr>
          <tr>
            <td>26</td>
            {formatPositions(20, 18)}
            <td>Marching Bot</td>
            <td><img className="botImg" src="/img/MarchingBot.png" alt="MarchingBot" /></td>
            <td>959</td>
            {formatEloGain(959, 975)}
            <td>{4 - 2}</td>
            <td>{5 - 2}</td>
            <td>{5 - 3}</td>
          </tr>
          <tr>
            <td>27</td>
            <td className='yellow'>New</td>
            <td>Mercenary Bot</td>
            <td><img className="botImg" src="/img/MercenaryBot.png" alt="MercenaryBot" /></td>
            <td>954</td>
            {formatEloGain(954, 1000)}
            <td>{2 - 0}</td>
            <td>{1 - 0}</td>
            <td>{4 - 0}</td>
          </tr>
          <tr>
            <td>28</td>
            {formatPositions(21, 20)}
            <td>One Piece Random Bot</td>
            <td><img className="botImg" src="/img/OnePieceRandomBot.png" alt="OnePieceRandomBot" /></td>
            <td>932</td>
            {formatEloGain(932, 959)}
            <td>{8 - 6}</td>
            <td>{8 - 6}</td>
            <td>{12 - 9}</td>
          </tr>
          <tr>
            <td>29</td>
            {formatPositions(22, 28)}
            <td>Adventurous King Bot</td>
            <td><img className="botImg" src="/img/AdventurousKingBot.png" alt="AdventurousKingBot" /></td>
            <td>920</td>
            {formatEloGain(920, 898)}
            <td>{6 - 4}</td>
            <td>{14 - 10}</td>
            <td>{8 - 7}</td>
          </tr>
          <tr>
            <td>30</td>
            {formatPositions(23, 26)}
            <td>Shield Bot</td>
            <td><img className="botImg" src="/img/ShieldBot.png" alt="ShieldBot" /></td>
            <td>918</td>
            {formatEloGain(918, 924)}
            <td>{7 - 5}</td>
            <td>{18 - 14}</td>
            <td>{10 - 9}</td>
          </tr>
          <tr>
            <td>31</td>
            {formatPositions(24, 10)}
            <td>Restrictor Bot</td>
            <td><img className="botImg" src="/img/RestrictorBot.png" alt="RestrictorBot" /></td>
            <td>918</td>
            {formatEloGain(918, 1056)}
            <td>{7 - 6}</td>
            <td>{5 - 5}</td>
            <td>{9 - 3}</td>
          </tr>
          <tr>
            <td>32</td>
            {formatPositions(25, 19)}
            <td>Botdefender</td>
            <td><img className="botImg" src="/img/BotDefender.png" alt="Botdefender" /></td>
            <td>905</td>
            {formatEloGain(905, 969)}
            <td>{3 - 2}</td>
            <td>{12 - 9}</td>
            <td>{6 - 3}</td>
          </tr>
          <tr>
            <td>33</td>
            <td className='yellow'>New</td>
            <td>Lazy Bot</td>
            <td><img className="botImg" src="/img/LazyBot.png" alt="LazyBot" /></td>
            <td>886</td>
            {formatEloGain(886, 1000)}
            <td>{0 - 0}</td>
            <td>{3 - 0}</td>
            <td>{4 - 0}</td>
          </tr>
          <tr>
            <td>34</td>
            {formatPositions(26, 24)}
            <td>Botfish</td>
            <td><img className="botImg" src="/img/Botfish.png" alt="Botfish" /></td>
            <td>885</td>
            {formatEloGain(885, 928)}
            <td>{2 - 1}</td>
            <td>{4 - 2}</td>
            <td>{8 - 4}</td>
          </tr>
          <tr>
            <td>35</td>
            {formatPositions(27, 32)}
            <td>Idiot Bot</td>
            <td><img className="botImg" src="/img/IdiotBot.png" alt="IdiotBot" /></td>
            <td>851</td>
            {formatEloGain(851, 811)}
            <td>{4 - 3}</td>
            <td>{16 - 11}</td>
            <td>{15 - 14}</td>
          </tr>
          <tr>
            <td>36</td>
            {formatPositions(28, 21)}
            <td>Random Bot</td>
            <td><img className="botImg" src="/img/RandomBot.png" alt="RandomBot" /></td>
            <td>834</td>
            {formatEloGain(834, 957)}
            <td>{6 - 6}</td>
            <td>{10 - 8}</td>
            <td>{12 - 7}</td>
          </tr>
          <tr>
            <td>37</td>
            {formatPositions(29, 31)}
            <td>Lobotomy</td>
            <td><img className="botImg" src="/img/Lobotomy.png" alt="Lobotomy" /></td>
            <td>834</td>
            {formatEloGain(834, 840)}
            <td>{1 - 0}</td>
            <td>{5 - 1}</td>
            <td>{8 - 6}</td>
          </tr>
          <tr>
            <td>38</td>
            {formatPositions(30, 13)}
            <td>BOTential</td>
            <td><img className="botImg" src="/img/BOTential.png" alt="BOTential" /></td>
            <td>831</td>
            {formatEloGain(831, 1005)}
            <td>{10 - 10}</td>
            <td>{8 - 8}</td>
            <td>{17 - 10}</td>
          </tr>
          <tr>
            <td>39</td>
            {formatPositions(31, 30)}
            <td>5x Random Bot</td>
            <td><img className="botImg" src="/img/5xRandomBot.png" alt="FiveXRandomBot" /></td>
            <td>788</td>
            {formatEloGain(788, 854)}
            <td>{7 - 6}</td>
            <td>{12 - 10}</td>
            <td>{16 - 12}</td>
          </tr>
          <tr>
            <td>40</td>
            {formatPositions(32, 29)}
            <td>Bot Ross</td>
            <td><img className="botImg" src="/img/BotRoss.png" alt="BotRoss" /></td>
            <td>774</td>
            {formatEloGain(774, 884)}
            <td>{3 - 2}</td>
            <td>{14 - 13}</td>
            <td>{11 - 6}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Season5;