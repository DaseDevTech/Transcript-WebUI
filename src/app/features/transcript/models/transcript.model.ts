export interface TranscriptSegments {
    start: number;
    duration: number;
    text: string;
}

export interface TranscriptData {
    kind: string;
    video_id: string;
    url: string;
    platform: string;
    title: string;
    channel: string;
    duration: number;
    language: string;
    thumbnail_url: string;
    source: string;
    segments: TranscriptSegments[];
}

export interface TranscriptUsage {
    credits_spent: number;
    balance: number;
    bytes: number;
}

export interface TranscriptResponse {
  ok: boolean;  
  request_id: string;
  data: TranscriptData;
  usage: TranscriptUsage;
}  

export interface TranscriptRequest {
  video: string;
  mode?: 'auto' | 'captions' | 'audio';
  timestamps?: boolean;
}