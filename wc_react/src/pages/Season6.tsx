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

function Season6() {

  return (
    <>
      <PageButton/>
      <h2>Season 6</h2>
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
            <td>Thinking Bot</td>
            <td><img className="botImg" src="/img/ThinkingBot.png" alt="ThinkingBot" /></td>
            <td>1318</td>
            {formatEloGain(1318, 1172)}
            <td>{20 - 14}</td>
            <td>{2 - 1}</td>
            <td>{6 - 6}</td>
          </tr>
          <tr>
            <td>2</td>
            {formatPositions(2, 1)}
            <td>Botnia and Herzebotvina</td>
            <td><img className="botImg" src="/img/BotniaAndHerzebotvina.png" alt="BotniaAndHerzebotvina" /></td>
            <td>1249</td>
            {formatEloGain(1249, 1247)}
            <td>{16 - 12}</td>
            <td>{1 - 0}</td>
            <td>{4 - 2}</td>
          </tr>
          <tr>
            <td>3</td>
            {formatPositions(3, 14)}
            <td>Thinking Bot II</td>
            <td><img className="botImg" src="/img/ThinkingBotII.png" alt="ThinkingBotII" /></td>
            <td>1221</td>
            {formatEloGain(1221, 1072)}
            <td>{10 - 4}</td>
            <td>{2 - 1}</td>
            <td>{2 - 2}</td>
          </tr>
          <tr>
            <td>4</td>
            {formatPositions(4, 2)}
            <td>Two Move Bot</td>
            <td><img className="botImg" src="/img/TwoMoveBot.png" alt="TwoMoveBot" /></td>
            <td>1192</td>
            {formatEloGain(1192, 1204)}
            <td>{14 - 14}</td>
            <td>{4 - 2}</td>
            <td>{7 - 5}</td>
          </tr>
          <tr>
            <td>5</td>
            {formatPositions(5, 4)}
            <td>Bloodbot</td>
            <td><img className="botImg" src="/img/Bloodbot.png" alt="Bloodbot" /></td>
            <td>1144</td>
            {formatEloGain(1144, 1166)}
            <td>{20 - 17}</td>
            <td>{11 - 10}</td>
            <td>{11 - 8}</td>
          </tr>
          <tr>
            <td>6</td>
            {formatPositions(6, 5)}
            <td>Kamikaze Bot</td>
            <td><img className="botImg" src="/img/KamikazeBot.png" alt="KamikazeBot" /></td>
            <td>1120</td>
            {formatEloGain(1120, 1129)}
            <td>{13 - 12}</td>
            <td>{11 - 7}</td>
            <td>{11 - 9}</td>
          </tr>
          <tr>
            <td>7</td>
            {formatPositions(7, 8)}
            <td>Bot 618</td>
            <td><img className="botImg" src="/img/Bot618.png" alt="Bot618" /></td>
            <td>1117</td>
            {formatEloGain(1117, 1105)}
            <td>{6 - 4}</td>
            <td>{5 - 3}</td>
            <td>{3 - 0}</td>
          </tr>
          <tr>
            <td>8</td>
            <td className='yellow'>New</td>
            <td>1.5 Move Bot</td>
            <td><img className="botImg" src="/img/OnePointFiveMoveBot.png" alt="OnePointFiveMoveBot" /></td>
            <td>1117</td>
            {formatEloGain(1117, 1000)}
            <td>{6 - 0}</td>
            <td>{0 - 0}</td>
            <td>{1 - 0}</td>
          </tr>
          <tr>
            <td>9</td>
            <td className='yellow'>New</td>
            <td>Bot With a Clock</td>
            <td><img className="botImg" src="/img/BotWithAClock.png" alt="BotWithAClock" /></td>
            <td>1105</td>
            {formatEloGain(1105, 1000)}
            <td>{5 - 0}</td>
            <td>{1 - 0}</td>
            <td>{1 - 0}</td>
          </tr>
          <tr>
            <td>10</td>
            {formatPositions(8, 21)}
            <td>Bots United</td>
            <td><img className="botImg" src="/img/BotsUtd.png" alt="BotsUtd" /></td>
            <td>1101</td>
            {formatEloGain(1101, 999)}
            <td>{11 - 6}</td>
            <td>{4 - 3}</td>
            <td>{6 - 5}</td>
          </tr>
          <tr>
            <td>11</td>
            {formatPositions(9, 6)}
            <td>Assassin Bot</td>
            <td><img className="botImg" src="/img/AssassinBot.png" alt="AssassinBot" /></td>
            <td>1100</td>
            {formatEloGain(1100, 1108)}
            <td>{19 - 17}</td>
            <td>{6 - 5}</td>
            <td>{17 - 13}</td>
          </tr>
          <tr>
            <td>12</td>
            {formatPositions(10, 15)}
            <td>Christopher Columbot</td>
            <td><img className="botImg" src="/img/ChristopherColumbot.png" alt="ChristopherColumbot" /></td>
            <td>1098</td>
            {formatEloGain(1098, 1071)}
            <td>{15 - 11}</td>
            <td>{2 - 2}</td>
            <td>{11 - 8}</td>
          </tr>
          <tr>
            <td>13</td>
            {formatPositions(11, 27)}
            <td>Mercenary Bot</td>
            <td><img className="botImg" src="/img/MercenaryBot.png" alt="MercenaryBot" /></td>
            <td>1095</td>
            {formatEloGain(1095, 954)}
            <td>{8 - 2}</td>
            <td>{2 - 1}</td>
            <td>{4 - 4}</td>
          </tr>
          <tr>
            <td>14</td>
            {formatPositions(12, 16)}
            <td>Migrating Bot</td>
            <td><img className="botImg" src="/img/MigratingBot.png" alt="MigratingBot" /></td>
            <td>1073</td>
            {formatEloGain(1073, 1045)}
            <td>{11 - 7}</td>
            <td>{2 - 2}</td>
            <td>{8 - 5}</td>
          </tr>
          <tr>
            <td>15</td>
            {formatPositions(13, 9)}
            <td>Botkrieg</td>
            <td><img className="botImg" src="/img/Botkrieg.png" alt="Botkrieg" /></td>
            <td>1073</td>
            {formatEloGain(1073, 1093)}
            <td>{8 - 5}</td>
            <td>{0 - 0}</td>
            <td>{6 - 2}</td>
          </tr>
          <tr>
            <td>16</td>
            {formatPositions(14, 18)}
            <td>Hitman Bot</td>
            <td><img className="botImg" src="/img/HitmanBot.png" alt="HitmanBot" /></td>
            <td>1062</td>
            {formatEloGain(1062, 1019)}
            <td>{12 - 8}</td>
            <td>{6 - 6}</td>
            <td>{10 - 7}</td>
          </tr>
          <tr>
            <td>17</td>
            {formatPositions(15, 12)}
            <td>Laser Bot</td>
            <td><img className="botImg" src="/img/LaserBot.png" alt="LaserBot" /></td>
            <td>1083</td>
            {formatEloGain(1051, 1083)}
            <td>{9 - 7}</td>
            <td>{4 - 2}</td>
            <td>{8 - 5}</td>
          </tr>
          <tr>
            <td>18</td>
            {formatPositions(16, 24)}
            <td>Abilibot</td>
            <td><img className="botImg" src="/img/Abilibot.png" alt="Abilibot" /></td>
            <td>1042</td>
            {formatEloGain(1042, 972)}
            <td>{9 - 5}</td>
            <td>{13 - 11}</td>
            <td>{6 - 5}</td>
          </tr>
          <tr>
            <td>19</td>
            <td className='yellow'>New</td>
            <td>Blind as a Bot</td>
            <td><img className="botImg" src="/img/BlindAsABot.png" alt="BlindAsABot" /></td>
            <td>1041</td>
            {formatEloGain(1041, 1000)}
            <td>{3 - 0}</td>
            <td>{3 - 0}</td>
            <td>{1 - 0}</td>
          </tr>
          <tr>
            <td>20</td>
            {formatPositions(17, 13)}
            <td>Savage Beastbot</td>
            <td><img className="botImg" src="/img/SavageBeastBot.png" alt="SavageBeastBot" /></td>
            <td>1038</td>
            {formatEloGain(1038, 1077)}
            <td>{11 - 9}</td>
            <td>{13 - 11}</td>
            <td>{11 - 8}</td>
          </tr>
          <tr>
            <td>21</td>
            {formatPositions(18, 11)}
            <td>Bottus Maximus</td>
            <td><img className="botImg" src="/img/BottusMaximus.png" alt="BottusMaximus" /></td>
            <td>1034</td>
            {formatEloGain(1034, 1088)}
            <td>{14 - 12}</td>
            <td>{16 - 16}</td>
            <td>{12 - 7}</td>
          </tr>
          <tr>
            <td>22</td>
            {formatPositions(19, 10)}
            <td>Equality Bot</td>
            <td><img className="botImg" src="/img/EqualityBot.png" alt="EqualityBot" /></td>
            <td>1033</td>
            {formatEloGain(1033, 1092)}
            <td>{10 - 8}</td>
            <td>{10 - 9}</td>
            <td>{8 - 4}</td>
          </tr>
          <tr>
            <td>23</td>
            <td className='yellow'>New</td>
            <td>YOLO Bot</td>
            <td><img className="botImg" src="/img/YOLOBot.png" alt="YOLOBot" /></td>
            <td>1028</td>
            {formatEloGain(1028, 1000)}
            <td>{3 - 0}</td>
            <td>{2 - 0}</td>
            <td>{2 - 0}</td>
          </tr>
          <tr>
            <td>24</td>
            {formatPositions(20, 7)}
            <td>G2 E-Bot</td>
            <td><img className="botImg" src="/img/G2-EBot.png" alt="G2EBot" /></td>
            <td>997</td>
            {formatEloGain(997, 1106)}
            <td>{17 - 16}</td>
            <td>{4 - 4}</td>
            <td>{14 - 8}</td>
          </tr>
          <tr>
            <td>25</td>
            {formatPositions(21, 25)}
            <td>Bot With a Plot</td>
            <td><img className="botImg" src="/img/BotWithAPlot.png" alt="BotWithAPlot" /></td>
            <td>991</td>
            {formatEloGain(991, 967)}
            <td>{5 - 1}</td>
            <td>{4 - 3}</td>
            <td>{5 - 3}</td>
          </tr>
          <tr>
            <td>26</td>
            {formatPositions(22, 19)}
            <td>Counting Bot</td>
            <td><img className="botImg" src="/img/CountingBot.png" alt="CountingBot" /></td>
            <td>987</td>
            {formatEloGain(987, 1007)}
            <td>{7 - 4}</td>
            <td>{5 - 5}</td>
            <td>{9 - 5}</td>
          </tr>
          <tr>
            <td>27</td>
            {formatPositions(23, 17)}
            <td>Balance Bot</td>
            <td><img className="botImg" src="/img/BalanceBot.png" alt="BalanceBot" /></td>
            <td>972</td>
            {formatEloGain(972, 1024)}
            <td>{5 - 3}</td>
            <td>{4 - 2}</td>
            <td>{5 - 2}</td>
          </tr>
          <tr>
            <td>28</td>
            {formatPositions(24, 22)}
            <td>One Move Bot</td>
            <td><img className="botImg" src="/img/OneMoveBot.png" alt="OneMoveBot" /></td>
            <td>966</td>
            {formatEloGain(966, 991)}
            <td>{13 - 11}</td>
            <td>{6 - 4}</td>
            <td>{16 - 13}</td>
          </tr>
          <tr>
            <td>29</td>
            {formatPositions(25, 23)}
            <td>Speedrunner Bot</td>
            <td><img className="botImg" src="/img/SpeedRunnerBot.png" alt="SpeedrunnerBot" /></td>
            <td>974</td>
            {formatEloGain(947, 974)}
            <td>{1 - 0}</td>
            <td>{9 - 6}</td>
            <td>{4 - 1}</td>
          </tr>
          <tr>
            <td>30</td>
            {formatPositions(26, 20)}
            <td>Pawn Bot</td>
            <td><img className="botImg" src="/img/PawnBot.png" alt="PawnBot" /></td>
            <td>1000</td>
            {formatEloGain(945, 1000)}
            <td>{16 - 14}</td>
            <td>{9 - 8}</td>
            <td>{17 - 13}</td>
          </tr>
          <tr>
            <td>31</td>
            <td className='yellow'>New</td>
            <td>Sickly Bot Child</td>
            <td><img className="botImg" src="/img/SicklyBotChild.png" alt="SicklyBotChild" /></td>
            <td>939</td>
            {formatEloGain(939, 1000)}
            <td>{2 - 0}</td>
            <td>{0 - 0}</td>
            <td>{5 - 0}</td>
          </tr>
          <tr>
            <td>32</td>
            {formatPositions(27, 39)}
            <td>5x Random Bot</td>
            <td><img className="botImg" src="/img/5xRandomBot.png" alt="FiveXRandomBot" /></td>
            <td>936</td>
            {formatEloGain(936, 788)}
            <td>{12 - 7}</td>
            <td>{14 - 12}</td>
            <td>{16 - 16}</td>
          </tr>
          <tr>
            <td>33</td>
            <td className='yellow'>New</td>
            <td>Negative One Move Bot</td>
            <td><img className="botImg" src="/img/NegativeOneMoveBot.png" alt="NegativeOneMoveBot" /></td>
            <td>934</td>
            {formatEloGain(934, 1000)}
            <td>{1 - 0}</td>
            <td>{3 - 0}</td>
            <td>{3 - 0}</td>
          </tr>
          <tr>
            <td>34</td>
            {formatPositions(28, 30)}
            <td>Shield Bot</td>
            <td><img className="botImg" src="/img/ShieldBot.png" alt="ShieldBot" /></td>
            <td>931</td>
            {formatEloGain(931, 918)}
            <td>{8 - 7}</td>
            <td>{23 - 18}</td>
            <td>{11 - 10}</td>
          </tr>
          <tr>
            <td>35</td>
            {formatPositions(29, 33)}
            <td>Lazy Bot</td>
            <td><img className="botImg" src="/img/LazyBot.png" alt="LazyBot" /></td>
            <td>925</td>
            {formatEloGain(925, 886)}
            <td>{3 - 0}</td>
            <td>{7 - 3}</td>
            <td>{4 - 4}</td>
          </tr>
          <tr>
            <td>36</td>
            {formatPositions(30, 28)}
            <td>One Piece Random Bot</td>
            <td><img className="botImg" src="/img/OnePieceRandomBot.png" alt="OnePieceRandomBot" /></td>
            <td>923</td>
            {formatEloGain(923, 932)}
            <td>{10 - 8}</td>
            <td>{11 - 8}</td>
            <td>{14 - 12}</td>
          </tr>
          <tr>
            <td>37</td>
            <td className='yellow'>New</td>
            <td>Gambling Bot</td>
            <td><img className="botImg" src="/img/GamblingBot.png" alt="GamblingBot" /></td>
            <td>923</td>
            {formatEloGain(923, 1000)}
            <td>{2 - 0}</td>
            <td>{0 - 0}</td>
            <td>{5 - 0}</td>
          </tr>
          <tr>
            <td>38</td>
            {formatPositions(31, 26)}
            <td>Marching Bot</td>
            <td><img className="botImg" src="/img/MarchingBot.png" alt="MarchingBot" /></td>
            <td>902</td>
            {formatEloGain(902, 959)}
            <td>{6 - 4}</td>
            <td>{7 - 5}</td>
            <td>{8 - 5}</td>
          </tr>
          <tr>
            <td>39</td>
            {formatPositions(32, 34)}
            <td>Botfish</td>
            <td><img className="botImg" src="/img/Botfish.png" alt="Botfish" /></td>
            <td>901</td>
            {formatEloGain(901, 885)}
            <td>{5 - 2}</td>
            <td>{6 - 4}</td>
            <td>{10 - 8}</td>
          </tr>
          <tr>
            <td>40</td>
            {formatPositions(33, 31)}
            <td>Restrictor Bot</td>
            <td><img className="botImg" src="/img/RestrictorBot.png" alt="RestrictorBot" /></td>
            <td>897</td>
            {formatEloGain(897, 918)}
            <td>{9 - 7}</td>
            <td>{6 - 5}</td>
            <td>{13 - 9}</td>
          </tr>
          <tr>
            <td>41</td>
            {formatPositions(34, 32)}
            <td>Botdefender</td>
            <td><img className="botImg" src="/img/BotDefender.png" alt="Botdefender" /></td>
            <td>896</td>
            {formatEloGain(896, 905)}
            <td>{4 - 3}</td>
            <td>{16 - 12}</td>
            <td>{8 - 6}</td>
          </tr>
          <tr>
            <td>42</td>
            <td className='yellow'>New</td>
            <td>Bothoven</td>
            <td><img className="botImg" src="/img/Bothoven.png" alt="Bothoven" /></td>
            <td>877</td>
            {formatEloGain(877, 1000)}
            <td>{0 - 0}</td>
            <td>{2 - 0}</td>
            <td>{5 - 0}</td>
          </tr>
          <tr>
            <td>43</td>
            {formatPositions(35, 38)}
            <td>BOTential</td>
            <td><img className="botImg" src="/img/BOTential.png" alt="BOTential" /></td>
            <td>862</td>
            {formatEloGain(862, 831)}
            <td>{12 - 10}</td>
            <td>{12 - 8}</td>
            <td>{18 - 17}</td>
          </tr>
          <tr>
            <td>44</td>
            {formatPositions(36, 29)}
            <td>Adventurous King Bot</td>
            <td><img className="botImg" src="/img/AdventurousKingBot.png" alt="AdventurousKingBot" /></td>
            <td>838</td>
            {formatEloGain(838, 920)}
            <td>{7 - 6}</td>
            <td>{15 - 14}</td>
            <td>{13 - 8}</td>
          </tr>
          <tr>
            <td>45</td>
            {formatPositions(37, 40)}
            <td>Bot Ross</td>
            <td><img className="botImg" src="/img/BotRoss.png" alt="BotRoss" /></td>
            <td>782</td>
            {formatEloGain(782, 774)}
            <td>{4 - 3}</td>
            <td>{18 - 14}</td>
            <td>{13 - 11}</td>
          </tr>
          <tr>
            <td>46</td>
            {formatPositions(38, 35)}
            <td>Idiot Bot</td>
            <td><img className="botImg" src="/img/IdiotBot.png" alt="IdiotBot" /></td>
            <td>774</td>
            {formatEloGain(774, 851)}
            <td>{5 - 4}</td>
            <td>{18 - 16}</td>
            <td>{19 - 15}</td>
          </tr>
          <tr>
            <td>47</td>
            {formatPositions(39, 36)}
            <td>Random Bot</td>
            <td><img className="botImg" src="/img/RandomBot.png" alt="RandomBot" /></td>
            <td>766</td>
            {formatEloGain(766, 834)}
            <td>{8 - 6}</td>
            <td>{11 - 10}</td>
            <td>{16 - 12}</td>
          </tr>
          <tr>
            <td>48</td>
            {formatPositions(40, 37)}
            <td>Lobotomy</td>
            <td><img className="botImg" src="/img/Lobotomy.png" alt="Lobotomy" /></td>
            <td>737</td>
            {formatEloGain(737, 834)}
            <td>{1 - 1}</td>
            <td>{8 - 5}</td>
            <td>{12 - 8}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Season6;