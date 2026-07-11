import {
  collection,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { db } from "@/firebase/config";

function generateRoomCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function createRoom(playerName: string) {
  const roomCode = generateRoomCode();

  await setDoc(doc(collection(db, "rooms"), roomCode), {
    roomCode,
    host: playerName,
    status: "waiting",
    createdAt: Date.now(),
    players: [
      {
        seat: 1,
        name: playerName,
        score: 0,
      },
    ],
  });

  return roomCode;
}

export async function joinRoom(
  roomCode: string,
  playerName: string
) {
  const roomRef = doc(db, "rooms", roomCode);

  const roomSnap = await getDoc(roomRef);

  if (!roomSnap.exists()) {
    throw new Error("房間不存在");
  }

  await updateDoc(roomRef, {
    players: arrayUnion({
      seat: 0,
      name: playerName,
      score: 0,
    }),
  });
}