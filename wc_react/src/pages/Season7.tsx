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

function Season7() {

  return (
    <>
      <PageButton/>
      <h2>Season 7</h2>
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
            {formatPositions(1, 2)}
            <td>Botnia and Herzebotvina</td>
            <td><img className="botImg" src="/img/BotniaAndHerzebotvina.png" alt="BotniaAndHerzebotvina" /></td>
            <td>1343</td>
            {formatEloGain(1343, 1247)}
            <td>{22 - 16}</td>
            <td>{1 - 1}</td>
            <td>{5 - 4}</td>
          </tr>
          <tr>
            <td>2</td>
            {formatPositions(2, 1)}
            <td>Thinking Bot</td>
            <td><img className="botImg" src="/img/ThinkingBot.png" alt="ThinkingBot" /></td>
            <td>1342</td>
            {formatEloGain(1342, 1318)}
            <td>{24 - 20}</td>
            <td>{4 - 2}</td>
            <td>{7 - 6}</td>
          </tr>
          <tr>
            <td>3</td>
            {formatPositions(3, 3)}
            <td>Thinking Bot II</td>
            <td><img className="botImg" src="/img/ThinkingBotII.png" alt="ThinkingBotII" /></td>
            <td>1236</td>
            {formatEloGain(1236, 1221)}
            <td>{14 - 10}</td>
            <td>{3 - 2}</td>
            <td>{4 - 2}</td>
          </tr>
          <tr>
            <td>4</td>
            {formatPositions(3, 9)}
            <td>Bot With a Clock</td>
            <td><img className="botImg" src="/img/BotWithAClock.png" alt="BotWithAClock" /></td>
            <td>1224</td>
            {formatEloGain(1224, 1105)}
            <td>{11 - 5}</td>
            <td>{1 - 1}</td>
            <td>{2 - 1}</td>
          </tr>
          <tr>
            <td>5</td>
            {formatPositions(5, 15)}
            <td>Botkrieg</td>
            <td><img className="botImg" src="/img/Botkrieg.png" alt="Botkrieg" /></td>
            <td>1193</td>
            {formatEloGain(1193, 1073)}
            <td>{14 - 8}</td>
            <td>{0 - 0}</td>
            <td>{7 - 6}</td>
          </tr>
          <tr>
            <td>6</td>
            {formatPositions(6, 13)}
            <td>Mercenary Bot</td>
            <td><img className="botImg" src="/img/MercenaryBot.png" alt="MercenaryBot" /></td>
            <td>1174</td>
            {formatEloGain(1174, 1095)}
            <td>{13 - 8}</td>
            <td>{2 - 2}</td>
            <td>{6 - 4}</td>
          </tr>
          <tr>
            <td>7</td>
            {formatPositions(7, 6)}
            <td>Kamikaze Bot</td>
            <td><img className="botImg" src="/img/KamikazeBot.png" alt="KamikazeBot" /></td>
            <td>1165</td>
            {formatEloGain(1165, 1120)}
            <td>{16 - 13}</td>
            <td>{12 - 11}</td>
            <td>{14 - 11}</td>
          </tr>
          <tr>
            <td>8</td>
            <td className='yellow'>New</td>
            <td>Bot That Does Stuff</td>
            <td><img className="botImg" src="/img/BotThatDoesStuff.png" alt="BotThatDoesStuff" /></td>
            <td>1157</td>
            {formatEloGain(1157, 1000)}
            <td>{6 - 0}</td>
            <td>{1 - 0}</td>
            <td>{0 - 0}</td>
          </tr>
          <tr>
            <td>9</td>
            {formatPositions(8, 4)}
            <td>Two Move Bot</td>
            <td><img className="botImg" src="/img/TwoMoveBot.png" alt="TwoMoveBot" /></td>
            <td>1145</td>
            {formatEloGain(1145, 1192)}
            <td>{20 - 17}</td>
            <td>{4 - 4}</td>
            <td>{11 - 7}</td>
          </tr>
          <tr>
            <td>10</td>
            <td className='yellow'>New</td>
            <td>Bot by the Book</td>
            <td><img className="botImg" src="/img/BotbytheBook.png" alt="BotByTheBook" /></td>
            <td>1130</td>
            {formatEloGain(1130, 1000)}
            <td>{6 - 0}</td>
            <td>{0 - 0}</td>
            <td>{1 - 0}</td>
          </tr>
          <tr>
            <td>11</td>
            {formatPositions(9, 12)}
            <td>Christopher Columbot</td>
            <td><img className="botImg" src="/img/ChristopherColumbot.png" alt="ChristopherColumbot" /></td>
            <td>1117</td>
            {formatEloGain(1117, 1098)}
            <td>{19 - 15}</td>
            <td>{2 - 2}</td>
            <td>{14 - 11}</td>
          </tr>
          <tr>
            <td>12</td>
            {formatPositions(10, 17)}
            <td>Laser Bot</td>
            <td><img className="botImg" src="/img/LaserBot.png" alt="LaserBot" /></td>
            <td>1115</td>
            {formatEloGain(1115, 1083)}
            <td>{13 - 9}</td>
            <td>{6 - 4}</td>
            <td>{9 - 8}</td>
          </tr>
          <tr>
            <td>13</td>
            {formatPositions(11, 21)}
            <td>Bottus Maximus</td>
            <td><img className="botImg" src="/img/BottusMaximus.png" alt="BottusMaximus" /></td>
            <td>1097</td>
            {formatEloGain(1097, 1034)}
            <td>{18 - 14}</td>
            <td>{18 - 16}</td>
            <td>{13 - 12}</td>
          </tr>
          <tr>
            <td>14</td>
            {formatPositions(12, 24)}
            <td>G2 E-Bot</td>
            <td><img className="botImg" src="/img/G2-EBot.png" alt="G2EBot" /></td>
            <td>1097</td>
            {formatEloGain(1097, 997)}
            <td>{22 - 17}</td>
            <td>{5 - 4}</td>
            <td>{15 - 14}</td>
          </tr>
          <tr>
            <td>15</td>
            {formatPositions(13, 5)}
            <td>Bloodbot</td>
            <td><img className="botImg" src="/img/Bloodbot.png" alt="Bloodbot" /></td>
            <td>1095</td>
            {formatEloGain(1095, 1144)}
            <td>{21 - 20}</td>
            <td>{13 - 11}</td>
            <td>{15 - 11}</td>
          </tr>
          <tr>
            <td>16</td>
            {formatPositions(14, 25)}
            <td>Bot With a Plot</td>
            <td><img className="botImg" src="/img/BotWithAPlot.png" alt="BotWithAPlot" /></td>
            <td>1089</td>
            {formatEloGain(1089, 991)}
            <td>{10 - 5}</td>
            <td>{5 - 4}</td>
            <td>{6 - 5}</td>
          </tr>
          <tr>
            <td>17</td>
            {formatPositions(15, 7)}
            <td>Bot 618</td>
            <td><img className="botImg" src="/img/Bot618.png" alt="Bot618" /></td>
            <td>1078</td>
            {formatEloGain(1078, 1117)}
            <td>{7 - 6}</td>
            <td>{7 - 5}</td>
            <td>{7 - 3}</td>
          </tr>
          <tr>
            <td>18</td>
            {formatPositions(16, 8)}
            <td>1.5 Move Bot</td>
            <td><img className="botImg" src="/img/OnePointFiveMoveBot.png" alt="OnePointFiveMoveBot" /></td>
            <td>1074</td>
            {formatEloGain(1074, 1117)}
            <td>{8 - 6}</td>
            <td>{0 - 0}</td>
            <td>{6 - 1}</td>
          </tr>
          <tr>
            <td>19</td>
            <td className='yellow'>New</td>
            <td>Weighting Bot</td>
            <td><img className="botImg" src="/img/WeightingBot.png" alt="WeightingBot" /></td>
            <td>1071</td>
            {formatEloGain(1071, 1000)}
            <td>{5 - 0}</td>
            <td>{0 - 0}</td>
            <td>{2 - 0}</td>
          </tr>
          <tr>
            <td>20</td>
            {formatPositions(17, 20)}
            <td>Savage Beastbot</td>
            <td><img className="botImg" src="/img/SavageBeastBot.png" alt="SavageBeastBot" /></td>
            <td>1058</td>
            {formatEloGain(1058, 1038)}
            <td>{11 - 11}</td>
            <td>{13 - 13}</td>
            <td>{11 - 11}</td>
          </tr>
          <tr>
            <td>21</td>
            {formatPositions(18, 11)}
            <td>Assassin Bot</td>
            <td><img className="botImg" src="/img/AssassinBot.png" alt="AssassinBot" /></td>
            <td>1055</td>
            {formatEloGain(1055, 1100)}
            <td>{19 - 19}</td>
            <td>{6 - 6}</td>
            <td>{17 - 17}</td>
          </tr>
          <tr>
            <td>22</td>
            {formatPositions(19, 16)}
            <td>Hitman Bot</td>
            <td><img className="botImg" src="/img/HitmanBot.png" alt="HitmanBot" /></td>
            <td>1031</td>
            {formatEloGain(1031, 1062)}
            <td>{12 - 12}</td>
            <td>{6 - 6}</td>
            <td>{10 - 10}</td>
          </tr>
          <tr>
            <td>23</td>
            <td className='yellow'>New</td>
            <td>Colin McBot</td>
            <td><img className="botImg" src="/img/ColinMcBot.png" alt="ColinMcBot" /></td>
            <td>1022</td>
            {formatEloGain(1022, 1000)}
            <td>{4 - 0}</td>
            <td>{0 - 0}</td>
            <td>{3 - 0}</td>
          </tr>
          <tr>
            <td>24</td>
            {formatPositions(20, 31)}
            <td>Sickly Bot Child</td>
            <td><img className="botImg" src="/img/SicklyBotChild.png" alt="SicklyBotChild" /></td>
            <td>1010</td>
            {formatEloGain(1010, 939)}
            <td>{6 - 2}</td>
            <td>{1 - 0}</td>
            <td>{7 - 5}</td>
          </tr>
          <tr>
            <td>25</td>
            {formatPositions(21, 28)}
            <td>One Move Bot</td>
            <td><img className="botImg" src="/img/OneMoveBot.png" alt="OneMoveBot" /></td>
            <td>1000</td>
            {formatEloGain(1000, 966)}
            <td>{16 - 13}</td>
            <td>{9 - 6}</td>
            <td>{17 - 16}</td>
          </tr>
          <tr>
            <td>26</td>
            {formatPositions(22, 18)}
            <td>Abilibot</td>
            <td><img className="botImg" src="/img/Abilibot.png" alt="Abilibot" /></td>
            <td>997</td>
            {formatEloGain(997, 1042)}
            <td>{11 - 9}</td>
            <td>{14 - 13}</td>
            <td>{10 - 6}</td>
          </tr>
          <tr>
            <td>27</td>
            {formatPositions(23, 14)}
            <td>Migrating Bot</td>
            <td><img className="botImg" src="/img/MigratingBot.png" alt="MigratingBot" /></td>
            <td>994</td>
            {formatEloGain(994, 1073)}
            <td>{13 - 11}</td>
            <td>{2 - 2}</td>
            <td>{13 - 8}</td>
          </tr>
          <tr>
            <td>28</td>
            {formatPositions(24, 22)}
            <td>Equality Bot</td>
            <td><img className="botImg" src="/img/EqualityBot.png" alt="EqualityBot" /></td>
            <td>990</td>
            {formatEloGain(990, 1033)}
            <td>{12 - 10}</td>
            <td>{11 - 10}</td>
            <td>{12 - 8}</td>
          </tr>
          <tr>
            <td>29</td>
            <td className='yellow'>New</td>
            <td>Virus Bot</td>
            <td><img className="botImg" src="/img/VirusBot.png" alt="VirusBot" /></td>
            <td>990</td>
            {formatEloGain(990, 1000)}
            <td>{3 - 0}</td>
            <td>{1 - 0}</td>
            <td>{3 - 0}</td>
          </tr>
          <tr>
            <td>30</td>
            {formatPositions(25, 37)}
            <td>Gambling Bot</td>
            <td><img className="botImg" src="/img/GamblingBot.png" alt="GamblingBot" /></td>
            <td>987</td>
            {formatEloGain(987, 923)}
            <td>{6 - 2}</td>
            <td>{1 - 0}</td>
            <td>{7 - 5}</td>
          </tr>
          <tr>
            <td>31</td>
            {formatPositions(26, 30)}
            <td>Pawn Bot</td>
            <td><img className="botImg" src="/img/PawnBot.png" alt="PawnBot" /></td>
            <td>983</td>
            {formatEloGain(983, 945)}
            <td>{20 - 16}</td>
            <td>{9 - 9}</td>
            <td>{20 - 17}</td>
          </tr>
          <tr>
            <td>32</td>
            {formatPositions(27, 39)}
            <td>Botfish</td>
            <td><img className="botImg" src="/img/Botfish.png" alt="Botfish" /></td>
            <td>973</td>
            {formatEloGain(973, 901)}
            <td>{9 - 5}</td>
            <td>{8 - 6}</td>
            <td>{11 - 10}</td>
          </tr>
          <tr>
            <td>33</td>
            {formatPositions(28, 34)}
            <td>Shield Bot</td>
            <td><img className="botImg" src="/img/ShieldBot.png" alt="ShieldBot" /></td>
            <td>971</td>
            {formatEloGain(971, 918)}
            <td>{11 - 8}</td>
            <td>{26 - 23}</td>
            <td>{12 - 11}</td>
          </tr>
          <tr>
            <td>34</td>
            {formatPositions(29, 36)}
            <td>One Piece Random Bot</td>
            <td><img className="botImg" src="/img/OnePieceRandomBot.png" alt="OnePieceRandomBot" /></td>
            <td>968</td>
            {formatEloGain(968, 923)}
            <td>{14 - 10}</td>
            <td>{12 - 11}</td>
            <td>{16 - 14}</td>
          </tr>
          <tr>
            <td>35</td>
            {formatPositions(30, 29)}
            <td>YOLO Bot</td>
            <td><img className="botImg" src="/img/YOLOBot.png" alt="YOLOBot" /></td>
            <td>965</td>
            {formatEloGain(965, 1028)}
            <td>{5 - 3}</td>
            <td>{2 - 2}</td>
            <td>{7 - 2}</td>
          </tr>
          <tr>
            <td>36</td>
            {formatPositions(31, 27)}
            <td>Balance Bot</td>
            <td><img className="botImg" src="/img/BalanceBot.png" alt="BalanceBot" /></td>
            <td>948</td>
            {formatEloGain(948, 972)}
            <td>{7 - 5}</td>
            <td>{6 - 4}</td>
            <td>{8 - 5}</td>
          </tr>
          <tr>
            <td>37</td>
            {formatPositions(32, 41)}
            <td>Botdefender</td>
            <td><img className="botImg" src="/img/BotDefender.png" alt="Botdefender" /></td>
            <td>931</td>
            {formatEloGain(931, 896)}
            <td>{7 - 4}</td>
            <td>{20 - 16}</td>
            <td>{8 - 8}</td>
          </tr>
          <tr>
            <td>38</td>
            {formatPositions(33, 26)}
            <td>Counting Bot</td>
            <td><img className="botImg" src="/img/CountingBot.png" alt="CountingBot" /></td>
            <td>922</td>
            {formatEloGain(922, 987)}
            <td>{9 - 7}</td>
            <td>{7 - 5}</td>
            <td>{12 - 9}</td>
          </tr>
          <tr>
            <td>39</td>
            {formatPositions(34, 10)}
            <td>Bots United</td>
            <td><img className="botImg" src="/img/BotsUtd.png" alt="BotsUtd" /></td>
            <td>919</td>
            {formatEloGain(919, 1101)}
            <td>{11 - 11}</td>
            <td>{4 - 4}</td>
            <td>{13 - 6}</td>
          </tr>
          <tr>
            <td>40</td>
            {formatPositions(35, 19)}
            <td>Blind as a Bot</td>
            <td><img className="botImg" src="/img/BlindAsABot.png" alt="BlindAsABot" /></td>
            <td>915</td>
            {formatEloGain(915, 1041)}
            <td>{4 - 3}</td>
            <td>{3 - 3}</td>
            <td>{7 - 1}</td>
          </tr>
          <tr>
            <td>41</td>
            {formatPositions(36, 35)}
            <td>Lazy Bot</td>
            <td><img className="botImg" src="/img/LazyBot.png" alt="LazyBot" /></td>
            <td>910</td>
            {formatEloGain(910, 925)}
            <td>{5 - 3}</td>
            <td>{10 - 7}</td>
            <td>{6 - 4}</td>
          </tr>
          <tr>
            <td>42</td>
            <td className='yellow'>New</td>
            <td>Aggro Bot</td>
            <td><img className="botImg" src="/img/AggroBot.png" alt="AggroBot" /></td>
            <td>899</td>
            {formatEloGain(899, 1000)}
            <td>{1 - 0}</td>
            <td>{1 - 0}</td>
            <td>{5 - 0}</td>
          </tr>
          <tr>
            <td>43</td>
            {formatPositions(37, 29)}
            <td>Speedrunner Bot</td>
            <td><img className="botImg" src="/img/SpeedRunnerBot.png" alt="SpeedrunnerBot" /></td>
            <td>897</td>
            {formatEloGain(897, 947)}
            <td>{3 - 1}</td>
            <td>{10 - 9}</td>
            <td>{8 - 4}</td>
          </tr>
          <tr>
            <td>44</td>
            {formatPositions(38, 43)}
            <td>BOTential</td>
            <td><img className="botImg" src="/img/BOTential.png" alt="BOTential" /></td>
            <td>890</td>
            {formatEloGain(890, 862)}
            <td>{15 - 12}</td>
            <td>{15 - 12}</td>
            <td>{19 - 18}</td>
          </tr>
          <tr>
            <td>45</td>
            <td className='yellow'>New</td>
            <td>Berserker Bot</td>
            <td><img className="botImg" src="/img/BerserkerBot.png" alt="BerserkerBot" /></td>
            <td>886</td>
            {formatEloGain(886, 1000)}
            <td>{1 - 0}</td>
            <td>{0 - 0}</td>
            <td>{6 - 0}</td>
          </tr>
          <tr>
            <td>46</td>
            {formatPositions(39, 40)}
            <td>Restrictor Bot</td>
            <td><img className="botImg" src="/img/RestrictorBot.png" alt="RestrictorBot" /></td>
            <td>877</td>
            {formatEloGain(877, 897)}
            <td>{11 - 9}</td>
            <td>{8 - 6}</td>
            <td>{16 - 13}</td>
          </tr>
          <tr>
            <td>47</td>
            <td className='yellow'>New</td>
            <td>Amazeing Bot</td>
            <td><img className="botImg" src="/img/AmazeingBot.png" alt="AmazeingBot" /></td>
            <td>875</td>
            {formatEloGain(875, 1000)}
            <td>{0 - 0}</td>
            <td>{2 - 0}</td>
            <td>{5 - 0}</td>
          </tr>
          <tr>
            <td>48</td>
            {formatPositions(40, 38)}
            <td>Marching Bot</td>
            <td><img className="botImg" src="/img/MarchingBot.png" alt="MarchingBot" /></td>
            <td>840</td>
            {formatEloGain(840, 902)}
            <td>{7 - 6}</td>
            <td>{9 - 7}</td>
            <td>{12 - 8}</td>
          </tr>
          <tr>
            <td>49</td>
            {formatPositions(41, 32)}
            <td>5x Random Bot</td>
            <td><img className="botImg" src="/img/5xRandomBot.png" alt="FiveXRandomBot" /></td>
            <td>834</td>
            {formatEloGain(834, 936)}
            <td>{13 - 12}</td>
            <td>{14 - 14}</td>
            <td>{22 - 16}</td>
          </tr>
          <tr>
            <td>50</td>
            {formatPositions(42, 47)}
            <td>Random Bot</td>
            <td><img className="botImg" src="/img/RandomBot.png" alt="RandomBot" /></td>
            <td>831</td>
            {formatEloGain(831, 766)}
            <td>{11 - 8}</td>
            <td>{13 - 11}</td>
            <td>{18 - 16}</td>
          </tr>
          <tr>
            <td>51</td>
            {formatPositions(43, 44)}
            <td>Adventurous King Bot</td>
            <td><img className="botImg" src="/img/AdventurousKingBot.png" alt="AdventurousKingBot" /></td>
            <td>820</td>
            {formatEloGain(820, 838)}
            <td>{8 - 7}</td>
            <td>{20 - 15}</td>
            <td>{14 - 13}</td>
          </tr>
          <tr>
            <td>52</td>
            {formatPositions(44, 33)}
            <td>Negative One Move Bot</td>
            <td><img className="botImg" src="/img/NegativeOneMoveBot.png" alt="NegativeOneMoveBot" /></td>
            <td>810</td>
            {formatEloGain(810, 934)}
            <td>{1 - 1}</td>
            <td>{5 - 3}</td>
            <td>{8 - 3}</td>
          </tr>
          <tr>
            <td>53</td>
            {formatPositions(45, 46)}
            <td>Idiot Bot</td>
            <td><img className="botImg" src="/img/IdiotBot.png" alt="IdiotBot" /></td>
            <td>806</td>
            {formatEloGain(806, 774)}
            <td>{7 - 5}</td>
            <td>{21 - 18}</td>
            <td>{21 - 19}</td>
          </tr>
          <tr>
            <td>54</td>
            {formatPositions(46, 42)}
            <td>Bothoven</td>
            <td><img className="botImg" src="/img/Bothoven.png" alt="Bothoven" /></td>
            <td>804</td>
            {formatEloGain(804, 877)}
            <td>{1 - 0}</td>
            <td>{6 - 2}</td>
            <td>{7 - 5}</td>
          </tr>
          <tr>
            <td>55</td>
            {formatPositions(47, 45)}
            <td>Bot Ross</td>
            <td><img className="botImg" src="/img/BotRoss.png" alt="BotRoss" /></td>
            <td>744</td>
            {formatEloGain(744, 782)}
            <td>{4 - 4}</td>
            <td>{23 - 18}</td>
            <td>{15 - 13}</td>
          </tr>
          <tr>
            <td>56</td>
            {formatPositions(48, 48)}
            <td>Lobotomy</td>
            <td><img className="botImg" src="/img/Lobotomy.png" alt="Lobotomy" /></td>
            <td>706</td>
            {formatEloGain(706, 737)}
            <td>{1 - 1}</td>
            <td>{12 - 8}</td>
            <td>{15 - 12}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Season7;