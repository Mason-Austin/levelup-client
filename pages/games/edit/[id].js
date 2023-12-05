import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import GameForm from '../../../components/game/GameForm';
import { useAuth } from '../../../utils/context/authContext';
import { getSingleGame } from '../../../utils/data/gameData';

const EditGame = () => {
  const router = useRouter();
  const { user } = useAuth();
  const { id } = router.query;
  const [editGame, setEditGame] = useState();

  useEffect(() => {
    getSingleGame(id).then((game) => {
      setEditGame({
        id: game.id,
        skillLevel: game.skill_level,
        numberOfPlayers: game.number_of_players,
        title: game.title,
        maker: game.maker,
        gameTypeId: game.game_type.id,
      });
    });
  }, [id]);

  return (
    <div>
      <h2>Edit Game</h2>
      <GameForm user={user} initialGame={editGame} />
    </div>
  );
};

export default EditGame;
