import { Request, Response } from "express";
import { connect } from "../lib/connection";
import { RowDataPacket } from "mysql2";
import { v4 as uuidv4 } from "uuid";
import {
  IChallenge,
  IChallengeResult,
  IUidChallenge,
} from "../interfaces/challenge_interface";



export const createNewChallenge = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const {challenge_id, resultat_obtenu, temps_execution}: IChallengeResult = req.body;
    

    const conn = await connect();

    const uidChallenge = uuidv4();

    await conn.query(
      "INSERT INTO challenge (uid, challenge_id, resultat_obtenu, temps_execution) value (?,?,?,?)",
      [uidChallenge, challenge_id, resultat_obtenu, temps_execution]
    );

    return res.json({
      message: "Challenge result",
      Challenge_uid: uidChallenge
    });
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
};

export const createNewChallengeResult = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const {title, description, resultat_attendu}: IChallenge = req.body;
    

    const conn = await connect();

    const uidChallenge = uuidv4();

    await conn.query(
      "INSERT INTO challenge (challenge_id, title, description , resultat_attendu) value (?,?,?,?)",
      [uidChallenge, title, description, resultat_attendu]
    );

    return res.json({
      message: "Challenge",
      Challenge_uid: uidChallenge
    });
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
};


export const getChallenge = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const conn = await connect();
  
      const challengedb = await conn.query<RowDataPacket[]>(
        `select * from challenge;`);
  
      conn.end();
      
  
      return res.json({
        message:"Get challenge",
        challengesdb: challengedb[0]
      });
    } catch (err) {
      return res.status(500).json({
        message: err,
      });
    }
  };

  export const getChallengeByIdChallenge= async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const conn = await connect();
      
  
  
      const chall = await conn.query<RowDataPacket[]>(
        "SELECT * FROM challenge WHERE challenge_id = ? LIMIT 1;",
        [req.params.challenge_id]
      );
  
      await conn.end();
      
      return res.json({
        message: "Get Challenge By Id",
        Challenge: chall[0][0],
      });
    } catch (err) {
      return res.status(500).json({
        message: err,
      });
    }
  };

  export const getChallengeByIdChallengeResult= async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const conn = await connect();
      
  
  
      const chall = await conn.query<RowDataPacket[]>(
        "SELECT * FROM challenge_result WHERE uid = ? LIMIT 1;",
        [req.params.challenge_uid]
      );
  
      await conn.end();
      
      return res.json({
        message: "Get Challenge Result By Id",
        Challenge: chall[0][0],
      });
    } catch (err) {
      return res.status(500).json({
        message: err,
      });
    }
  };
  
  export const getChallengeResultByIdChallenge= async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const conn = await connect();
      
  
  
      const challengeResults = await conn.query<RowDataPacket[]>(
        "SELECT * FROM challenge_result WHERE challenge_id = ? ORDER BY temps_execution DESC;",
        [req.params.challenge_uid]
      );
  
      await conn.end();
      
      return res.json({
        message: "Get Challenge Result By Id",
        ChallengeResults: challengeResults[0],
      });
    } catch (err) {
      return res.status(500).json({
        message: err,
      });
    }
  };
  

