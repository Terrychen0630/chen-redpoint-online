export interface DealPattern {
  /** 唯一識別碼 */
  id: string;

  /** 顯示名稱 */
  name: string;

  /** 發牌規律，例如 [1,3,2] */
  pattern: number[];
}