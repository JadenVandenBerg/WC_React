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

function Season8() {

  return (
    <>
      <PageButton/>
      <h2>Season 8</h2>
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
            <td>Thinking Bot</td>
            <td><img className="botImg" src="/img/ThinkingBot.png" alt="ThinkingBot" /></td>
            <td>1337</td>
            {formatEloGain(1337, 1342)}
            <td>{28 - 24}</td>
            <td>{5 - 4}</td>
            <td>{9 - 7}</td>
          </tr>
          <tr>
            <td>2</td>
            {formatPositions(2, 1)}
            <td>Botnia and Herzebotvina</td>
            <td><img className="botImg" src="/img/BotniaAndHerzebotvina.png" alt="BotniaAndHerzebotvina" /></td>
            <td>1304</td>
            {formatEloGain(1304, 1343)}
            <td>{26 - 22}</td>
            <td>{1 - 1}</td>
            <td>{8 - 5}</td>
          </tr>
          <tr>
            <td>3</td>
            {formatPositions(3, 3)}
            <td>Thinking Bot II</td>
            <td><img className="botImg" src="/img/ThinkingBotII.png" alt="ThinkingBotII" /></td>
            <td>1280</td>
            {formatEloGain(1280, 1236)}
            <td>{19 - 14}</td>
            <td>{3 - 3}</td>
            <td>{6 - 4}</td>
          </tr>
          <tr>
            <td>4</td>
            {formatPositions(4, 5)}
            <td>Botkrieg</td>
            <td><img className="botImg" src="/img/Botkrieg.png" alt="Botkrieg" /></td>
            <td>1217</td>
            {formatEloGain(1217, 1193)}
            <td>{17 - 14}</td>
            <td>{1 - 0}</td>
            <td>{10 - 7}</td>
          </tr>
          <tr>
            <td>5</td>
            {formatPositions(5, 8)}
            <td>Bot That Does Stuff</td>
            <td><img className="botImg" src="/img/BotThatDoesStuff.png" alt="BotThatDoesStuff" /></td>
            <td>1211</td>
            {formatEloGain(1211, 1157)}
            <td>{9 - 6}</td>
            <td>{2 - 1}</td>
            <td>{3 - 0}</td>
          </tr>
          <tr>
            <td>6</td>
            {formatPositions(6, 10)}
            <td>Bot by the Book</td>
            <td><img className="botImg" src="/img/BotbytheBook.png" alt="BotbytheBook" /></td>
            <td>1206</td>
            {formatEloGain(1206, 1130)}
            <td>{10 - 6}</td>
            <td>{2 - 0}</td>
            <td>{2 - 1}</td>
          </tr>
          <tr>
            <td>7</td>
            {formatPositions(7, 18)}
            <td>1.5 Move Bot</td>
            <td><img className="botImg" src="/img/OnePointFiveMoveBot.png" alt="OnePointFiveMoveBot" /></td>
            <td>1201</td>
            {formatEloGain(1201, 1074)}
            <td>{14 - 8}</td>
            <td>{1 - 0}</td>
            <td>{6 - 6}</td>
          </tr>
          <tr>
            <td>8</td>
            {formatPositions(8, 12)}
            <td>Laser Bot</td>
            <td><img className="botImg" src="/img/LaserBot.png" alt="LaserBot" /></td>
            <td>1194</td>
            {formatEloGain(1194, 1115)}
            <td>{17 - 13}</td>
            <td>{8 - 6}</td>
            <td>{10 - 9}</td>
          </tr>
          <tr>
            <td>9</td>
            {formatPositions(9, 6)}
            <td>Mercenary Bot</td>
            <td><img className="botImg" src="/img/MercenaryBot.png" alt="MercenaryBot" /></td>
            <td>1176</td>
            {formatEloGain(1176, 1174)}
            <td>{15 - 13}</td>
            <td>{3 - 2}</td>
            <td>{10 - 6}</td>
          </tr>
          <tr>
            <td>10</td>
            {formatPositions(10, 7)}
            <td>Kamikaze Bot</td>
            <td><img className="botImg" src="/img/KamikazeBot.png" alt="KamikazeBot" /></td>
            <td>1165</td>
            {formatEloGain(1165, 1165)}
            <td>{19 - 16}</td>
            <td>{12 - 12}</td>
            <td>{18 - 14}</td>
          </tr>
          <tr>
            <td>11</td>
            {formatPositions(11, 23)}
            <td>Colin McBot</td>
            <td><img className="botImg" src="/img/ColinMcBot.png" alt="ColinMcBot" /></td>
            <td>1146</td>
            {formatEloGain(1146, 1022)}
            <td>{9 - 4}</td>
            <td>{1 - 0}</td>
            <td>{4 - 3}</td>
          </tr>
          <tr>
            <td>12</td>
            {formatPositions(12, 4)}
            <td>Bot With a Clock</td>
            <td><img className="botImg" src="/img/BotWithAClock.png" alt="BotWithAClock" /></td>
            <td>1144</td>
            {formatEloGain(1144, 1224)}
            <td>{13 - 11}</td>
            <td>{1 - 1}</td>
            <td>{7 - 2}</td>
          </tr>
          <tr>
            <td>13</td>
            {formatPositions(13, 19)}
            <td>Weighting Bot</td>
            <td><img className="botImg" src="/img/WeightingBot.png" alt="WeightingBot" /></td>
            <td>1138</td>
            {formatEloGain(1138, 1071)}
            <td>{9 - 5}</td>
            <td>{2 - 0}</td>
            <td>{3 - 2}</td>
          </tr>
          <tr>
            <td>14</td>
            {formatPositions(14, 9)}
            <td>Two Move Bot</td>
            <td><img className="botImg" src="/img/TwoMoveBot.png" alt="TwoMoveBot" /></td>
            <td>1132</td>
            {formatEloGain(1132, 1145)}
            <td>{23 - 20}</td>
            <td>{5 - 4}</td>
            <td>{14 - 11}</td>
          </tr>
          <tr>
            <td>15</td>
            <td className='yellow'>New</td>
            <td>Egbot</td>
            <td><img className="botImg" src="/img/Egbot.png" alt="Egbot" /></td>
            <td>1127</td>
            {formatEloGain(1127, 1000)}
            <td>{6 - 0}</td>
            <td>{0 - 0}</td>
            <td>{1 - 0}</td>
          </tr>
          <tr>
            <td>16</td>
            {formatPositions(15, 14)}
            <td>G2 E-Bot</td>
            <td><img className="botImg" src="/img/G2-EBot.png" alt="G2-EBot" /></td>
            <td>1126</td>
            {formatEloGain(1126, 1097)}
            <td>{26 - 22}</td>
            <td>{5 - 5}</td>
            <td>{18 - 15}</td>
          </tr>
          <tr>
            <td>17</td>
            {formatPositions(16, 13)}
            <td>Bottus Maximus</td>
            <td><img className="botImg" src="/img/BottusMaximus.png" alt="BottusMaximus" /></td>
            <td>1097</td>
            {formatEloGain(1097, 1097)}
            <td>{21 - 18}</td>
            <td>{19 - 18}</td>
            <td>{16 - 13}</td>
          </tr>
          <tr>
            <td>18</td>
            {formatPositions(17, 17)}
            <td>Bot 618</td>
            <td><img className="botImg" src="/img/Bot618.png" alt="Bot618" /></td>
            <td>1079</td>
            {formatEloGain(1079, 1078)}
            <td>{11 - 7}</td>
            <td>{7 - 7}</td>
            <td>{10 - 7}</td>
          </tr>
          <tr>
            <td>19</td>
            {formatPositions(18, 16)}
            <td>Bot With a Plot</td>
            <td><img className="botImg" src="/img/BotWithAPlot.png" alt="BotWithAPlot" /></td>
            <td>1071</td>
            {formatEloGain(1071, 1089)}
            <td>{12 - 10}</td>
            <td>{7 - 5}</td>
            <td>{9 - 6}</td>
          </tr>
          <tr>
            <td>20</td>
            <td className='yellow'>New</td>
            <td>Nearsighted Bot</td>
            <td><img className="botImg" src="/img/NearsightedBot.png" alt="NearsightedBot" /></td>
            <td>1071</td>
            {formatEloGain(1071, 1000)}
            <td>{5 - 0}</td>
            <td>{0 - 0}</td>
            <td>{2 - 0}</td>
          </tr>
          <tr>
            <td>21</td>
            {formatPositions(19, 26)}
            <td>Abilibot</td>
            <td><img className="botImg" src="/img/Abilibot.png" alt="Abilibot" /></td>
            <td>1057</td>
            {formatEloGain(1057, 997)}
            <td>{14 - 11}</td>
            <td>{17 - 14}</td>
            <td>{11 - 10}</td>
          </tr>
          <tr>
            <td>22</td>
            {formatPositions(20, 11)}
            <td>Christopher Columbot</td>
            <td><img className="botImg" src="/img/ChristopherColumbot.png" alt="ChristopherColumbot" /></td>
            <td>1048</td>
            {formatEloGain(1048, 1117)}
            <td>{20 - 19}</td>
            <td>{4 - 2}</td>
            <td>{18 - 14}</td>
          </tr>
          <tr>
            <td>23</td>
            {formatPositions(21, 20)}
            <td>Savage Beastbot</td>
            <td><img className="botImg" src="/img/SavageBeastBot.png" alt="SavageBeastBot" /></td>
            <td>1044</td>
            {formatEloGain(1044, 1058)}
            <td>{16 - 11}</td>
            <td>{18 - 13}</td>
            <td>{15 - 11}</td>
          </tr>
          <tr>
            <td>24</td>
            {formatPositions(22, 27)}
            <td>Migrating Bot</td>
            <td><img className="botImg" src="/img/MigratingBot.png" alt="MigratingBot" /></td>
            <td>1041</td>
            {formatEloGain(1041, 994)}
            <td>{17 - 13}</td>
            <td>{4 - 2}</td>
            <td>{14 - 13}</td>
          </tr>
          <tr>
            <td>25</td>
            {formatPositions(23, 28)}
            <td>Equality Bot</td>
            <td><img className="botImg" src="/img/EqualityBot.png" alt="EqualityBot" /></td>
            <td>1037</td>
            {formatEloGain(1037, 990)}
            <td>{16 - 12}</td>
            <td>{12 - 11}</td>
            <td>{14 - 12}</td>
          </tr>
          <tr>
            <td>26</td>
            <td className='yellow'>New</td>
            <td>Self Absorbed Bot</td>
            <td><img className="botImg" src="/img/SelfAbsorbedBot.png" alt="SelfAbsorbedBot" /></td>
            <td>1029</td>
            {formatEloGain(1029, 1000)}
            <td>{3 - 0}</td>
            <td>{2 - 0}</td>
            <td>{2 - 0}</td>
          </tr>
          <tr>
            <td>27</td>
            {formatPositions(24, 33)}
            <td>Shield Bot</td>
            <td><img className="botImg" src="/img/ShieldBot.png" alt="ShieldBot" /></td>
            <td>1025</td>
            {formatEloGain(1025, 971)}
            <td>{15 - 11}</td>
            <td>{27 - 26}</td>
            <td>{14 - 12}</td>
          </tr>
          <tr>
            <td>28</td>
            {formatPositions(25, 35)}
            <td>YOLO Bot</td>
            <td><img className="botImg" src="/img/YOLOBot.png" alt="YOLOBot" /></td>
            <td>1019</td>
            {formatEloGain(1019, 965)}
            <td>{10 - 5}</td>
            <td>{2 - 2}</td>
            <td>{9 - 7}</td>
          </tr>
          <tr>
            <td>29</td>
            {formatPositions(26, 15)}
            <td>Bloodbot</td>
            <td><img className="botImg" src="/img/Bloodbot.png" alt="Bloodbot" /></td>
            <td>1011</td>
            {formatEloGain(1011, 1095)}
            <td>{22 - 21}</td>
            <td>{15 - 13}</td>
            <td>{19 - 15}</td>
          </tr>
          <tr>
            <td>30</td>
            {formatPositions(27, 22)}
            <td>Hitman Bot</td>
            <td><img className="botImg" src="/img/HitmanBot.png" alt="HitmanBot" /></td>
            <td>1000</td>
            {formatEloGain(1000, 1031)}
            <td>{16 - 14}</td>
            <td>{8 - 7}</td>
            <td>{18 - 14}</td>
          </tr>
          <tr>
            <td>31</td>
            {formatPositions(28, 29)}
            <td>Virus Bot</td>
            <td><img className="botImg" src="/img/VirusBot.png" alt="VirusBot" /></td>
            <td>1000</td>
            {formatEloGain(1000, 990)}
            <td>{5 - 3}</td>
            <td>{4 - 1}</td>
            <td>{5 - 3}</td>
          </tr>
          <tr>
            <td>32</td>
            {formatPositions(29, 37)}
            <td>Botdefender</td>
            <td><img className="botImg" src="/img/BotDefender.png" alt="BotDefender" /></td>
            <td>992</td>
            {formatEloGain(992, 931)}
            <td>{10 - 7}</td>
            <td>{23 - 20}</td>
            <td>{9 - 8}</td>
          </tr>
          <tr>
            <td>33</td>
            {formatPositions(30, 42)}
            <td>Aggro Bot</td>
            <td><img className="botImg" src="/img/AggroBot.png" alt="AggroBot" /></td>
            <td>988</td>
            {formatEloGain(988, 899)}
            <td>{6 - 1}</td>
            <td>{2 - 1}</td>
            <td>{6 - 5}</td>
          </tr>
          <tr>
            <td>34</td>
            <td className='yellow'>New</td>
            <td>Both</td>
            <td><img className="botImg" src="/img/Both.png" alt="Both" /></td>
            <td>980</td>
            {formatEloGain(980, 1000)}
            <td>{3 - 0}</td>
            <td>{0 - 0}</td>
            <td>{4 - 0}</td>
          </tr>
          <tr>
            <td>35</td>
            {formatPositions(31, 31)}
            <td>Pawn Bot</td>
            <td><img className="botImg" src="/img/PawnBot.png" alt="PawnBot" /></td>
            <td>977</td>
            {formatEloGain(977, 983)}
            <td>{22 - 20}</td>
            <td>{12 - 9}</td>
            <td>{22 - 20}</td>
          </tr>
          <tr>
            <td>36</td>
            {formatPositions(32, 25)}
            <td>One Move Bot</td>
            <td><img className="botImg" src="/img/OneMoveBot.png" alt="OneMoveBot" /></td>
            <td>974</td>
            {formatEloGain(974, 1000)}
            <td>{18 - 16}</td>
            <td>{11 - 9}</td>
            <td>{20 - 17}</td>
          </tr>
          <tr>
            <td>37</td>
            <td className='yellow'>New</td>
            <td>Coinbot</td>
            <td><img className="botImg" src="/img/Coinbot.png" alt="Coinbot" /></td>
            <td>968</td>
            {formatEloGain(968, 1000)}
            <td>{2 - 0}</td>
            <td>{2 - 0}</td>
            <td>{3 - 0}</td>
          </tr>
          <tr>
            <td>38</td>
            {formatPositions(33, 41)}
            <td>Lazy Bot</td>
            <td><img className="botImg" src="/img/LazyBot.png" alt="LazyBot" /></td>
            <td>966</td>
            {formatEloGain(966, 910)}
            <td>{8 - 5}</td>
            <td>{14 - 10}</td>
            <td>{6 - 6}</td>
          </tr>
          <tr>
            <td>39</td>
            <td className='yellow'>New</td>
            <td>Inequality Bot</td>
            <td><img className="botImg" src="/img/InequalityBot.png" alt="InequalityBot" /></td>
            <td>966</td>
            {formatEloGain(966, 1000)}
            <td>{1 - 0}</td>
            <td>{4 - 0}</td>
            <td>{2 - 0}</td>
          </tr>
          <tr>
            <td>40</td>
            {formatPositions(34, 30)}
            <td>Gambling Bot</td>
            <td><img className="botImg" src="/img/GamblingBot.png" alt="GamblingBot" /></td>
            <td>961</td>
            {formatEloGain(961, 987)}
            <td>{8 - 6}</td>
            <td>{3 - 1}</td>
            <td>{10 - 7}</td>
          </tr>
          <tr>
            <td>41</td>
            {formatPositions(35, 21)}
            <td>Assassin Bot</td>
            <td><img className="botImg" src="/img/AssassinBot.png" alt="AssassinBot" /></td>
            <td>936</td>
            {formatEloGain(936, 1055)}
            <td>{22 - 19}</td>
            <td>{7 - 6}</td>
            <td>{27 - 17}</td>
          </tr>
          <tr>
            <td>42</td>
            {formatPositions(36, 44)}
            <td>BOTential</td>
            <td><img className="botImg" src="/img/BOTential.png" alt="BOTential" /></td>
            <td>934</td>
            {formatEloGain(934, 890)}
            <td>{19 - 15}</td>
            <td>{16 - 15}</td>
            <td>{21 - 19}</td>
          </tr>
          <tr>
            <td>43</td>
            {formatPositions(37, 32)}
            <td>Botfish</td>
            <td><img className="botImg" src="/img/Botfish.png" alt="Botfish" /></td>
            <td>929</td>
            {formatEloGain(929, 973)}
            <td>{10 - 9}</td>
            <td>{10 - 8}</td>
            <td>{15 - 11}</td>
          </tr>
          <tr>
            <td>44</td>
            {formatPositions(38, 36)}
            <td>Balance Bot</td>
            <td><img className="botImg" src="/img/BalanceBot.png" alt="BalanceBot" /></td>
            <td>922</td>
            {formatEloGain(922, 948)}
            <td>{10 - 7}</td>
            <td>{6 - 6}</td>
            <td>{12 - 8}</td>
          </tr>
          <tr>
            <td>45</td>
            {formatPositions(39, 39)}
            <td>Bots United</td>
            <td><img className="botImg" src="/img/BotsUtd.png" alt="BotsUtd" /></td>
            <td>915</td>
            {formatEloGain(915, 919)}
            <td>{14 - 11}</td>
            <td>{4 - 4}</td>
            <td>{17 - 13}</td>
          </tr>
          <tr>
            <td>46</td>
            {formatPositions(40, 40)}
            <td>Blind as a Bot</td>
            <td><img className="botImg" src="/img/BlindAsABot.png" alt="BlindAsABot" /></td>
            <td>915</td>
            {formatEloGain(915, 915)}
            <td>{7 - 4}</td>
            <td>{4 - 3}</td>
            <td>{10 - 7}</td>
          </tr>
          <tr>
            <td>47</td>
            <td className='yellow'>New</td>
            <td>Botgrabber</td>
            <td><img className="botImg" src="/img/Botgrabber.png" alt="Botgrabber" /></td>
            <td>912</td>
            {formatEloGain(912, 1000)}
            <td>{1 - 0}</td>
            <td>{2 - 0}</td>
            <td>{4 - 0}</td>
          </tr>
          <tr>
            <td>48</td>
            {formatPositions(41, 48)}
            <td>Marching Bot</td>
            <td><img className="botImg" src="/img/MarchingBot.png" alt="MarchingBot" /></td>
            <td>901</td>
            {formatEloGain(901, 840)}
            <td>{10 - 7}</td>
            <td>{12 - 9}</td>
            <td>{13 - 12}</td>
          </tr>
          <tr>
            <td>49</td>
            {formatPositions(42, 43)}
            <td>Speedrunner Bot</td>
            <td><img className="botImg" src="/img/SpeedRunnerBot.png" alt="SpeedRunnerBot" /></td>
            <td>901</td>
            {formatEloGain(901, 897)}
            <td>{5 - 3}</td>
            <td>{13 - 10}</td>
            <td>{10 - 8}</td>
          </tr>
          <tr>
            <td>50</td>
            {formatPositions(43, 34)}
            <td>One Piece Random Bot</td>
            <td><img className="botImg" src="/img/OnePieceRandomBot.png" alt="OnePieceRandomBot" /></td>
            <td>892</td>
            {formatEloGain(892, 968)}
            <td>{16 - 14}</td>
            <td>{12 - 12}</td>
            <td>{21 - 16}</td>
          </tr>
          <tr>
            <td>51</td>
            {formatPositions(44, 49)}
            <td>5x Random Bot</td>
            <td><img className="botImg" src="/img/5xRandomBot.png" alt="5xRandomBot" /></td>
            <td>887</td>
            {formatEloGain(887, 834)}
            <td>{17 - 13}</td>
            <td>{16 - 14}</td>
            <td>{23 - 22}</td>
          </tr>
          <tr>
            <td>52</td>
            <td className='yellow'>New</td>
            <td>Bottom</td>
            <td><img className="botImg" src="/img/Bottom.png" alt="Bottom" /></td>
            <td>885</td>
            {formatEloGain(885, 1000)}
            <td>{0 - 0}</td>
            <td>{2 - 0}</td>
            <td>{5 - 0}</td>
          </tr>
          <tr>
            <td>53</td>
            {formatPositions(45, 38)}
            <td>Counting Bot</td>
            <td><img className="botImg" src="/img/CountingBot.png" alt="CountingBot" /></td>
            <td>859</td>
            {formatEloGain(859, 922)}
            <td>{11 - 9}</td>
            <td>{8 - 7}</td>
            <td>{16 - 12}</td>
          </tr>
          <tr>
            <td>54</td>
            {formatPositions(46, 24)}
            <td>Sickly Bot Child</td>
            <td><img className="botImg" src="/img/SicklyBotChild.png" alt="SicklyBotChild" /></td>
            <td>855</td>
            {formatEloGain(855, 1010)}
            <td>{6 - 6}</td>
            <td>{1 - 1}</td>
            <td>{14 - 7}</td>
          </tr>
          <tr>
            <td>55</td>
            {formatPositions(47, 51)}
            <td>Adventurous King Bot</td>
            <td><img className="botImg" src="/img/AdventurousKingBot.png" alt="AdventurousKingBot" /></td>
            <td>845</td>
            {formatEloGain(845, 820)}
            <td>{9 - 8}</td>
            <td>{26 - 20}</td>
            <td>{14 - 14}</td>
          </tr>
          <tr>
            <td>56</td>
            {formatPositions(48, 46)}
            <td>Restrictor Bot</td>
            <td><img className="botImg" src="/img/RestrictorBot.png" alt="RestrictorBot" /></td>
            <td>841</td>
            {formatEloGain(841, 877)}
            <td>{13 - 11}</td>
            <td>{9 - 8}</td>
            <td>{20 - 16}</td>
          </tr>
          <tr>
            <td>57</td>
            {formatPositions(49, 50)}
            <td>Random Bot</td>
            <td><img className="botImg" src="/img/RandomBot.png" alt="RandomBot" /></td>
            <td>825</td>
            {formatEloGain(825, 831)}
            <td>{14 - 11}</td>
            <td>{15 - 13}</td>
            <td>{20 - 18}</td>
          </tr>
          <tr>
            <td>58</td>
            {formatPositions(50, 52)}
            <td>Negative One Move Bot</td>
            <td><img className="botImg" src="/img/NegativeOneMoveBot.png" alt="NegativeOneMoveBot" /></td>
            <td>798</td>
            {formatEloGain(798, 810)}
            <td>{3 - 1}</td>
            <td>{8 - 5}</td>
            <td>{10 - 8}</td>
          </tr>
          <tr>
            <td>59</td>
            {formatPositions(51, 45)}
            <td>Berserker Bot</td>
            <td><img className="botImg" src="/img/BerserkerBot.png" alt="BerserkerBot" /></td>
            <td>793</td>
            {formatEloGain(793, 886)}
            <td>{2 - 1}</td>
            <td>{1 - 0}</td>
            <td>{11 - 6}</td>
          </tr>
          <tr>
            <td>60</td>
            {formatPositions(52, 53)}
            <td>Idiot Bot</td>
            <td><img className="botImg" src="/img/IdiotBot.png" alt="IdiotBot" /></td>
            <td>787</td>
            {formatEloGain(787, 806)}
            <td>{8 - 7}</td>
            <td>{26 - 21}</td>
            <td>{22 - 21}</td>
          </tr>
          <tr>
            <td>61</td>
            {formatPositions(53, 56)}
            <td>Lobotomy</td>
            <td><img className="botImg" src="/img/Lobotomy.png" alt="Lobotomy" /></td>
            <td>764</td>
            {formatEloGain(764, 706)}
            <td>{2 - 1}</td>
            <td>{17 - 12}</td>
            <td>{16 - 15}</td>
          </tr>
          <tr>
            <td>62</td>
            {formatPositions(54, 47)}
            <td>Amazeing Bot</td>
            <td><img className="botImg" src="/img/AmazeingBot.png" alt="AmazeingBot" /></td>
            <td>750</td>
            {formatEloGain(750, 875)}
            <td>{0 - 0}</td>
            <td>{4 - 2}</td>
            <td>{10 - 5}</td>
          </tr>
          <tr>
            <td>63</td>
            {formatPositions(55, 55)}
            <td>Bot Ross</td>
            <td><img className="botImg" src="/img/BotRoss.png" alt="BotRoss" /></td>
            <td>728</td>
            {formatEloGain(728, 744)}
            <td>{4 - 4}</td>
            <td>{28 - 23}</td>
            <td>{17 - 15}</td>
          </tr>
          <tr>
            <td>64</td>
            {formatPositions(56, 54)}
            <td>Bothoven</td>
            <td><img className="botImg" src="/img/Bothoven.png" alt="Bothoven" /></td>
            <td>721</td>
            {formatEloGain(721, 804)}
            <td>{1 - 1}</td>
            <td>{10 - 6}</td>
            <td>{10 - 7}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Season8;
