import NodeCache from 'node-cache'

type Key = string | number

class CacheLocal {
  private static _instance: CacheLocal

  private cache: NodeCache

  private constructor(ttlSeconds: number) {
    this.cache = new NodeCache({
      stdTTL: ttlSeconds,
      checkperiod: ttlSeconds * 0.2,
      useClones: false
    })
  }

  public static getInstance(): CacheLocal {
    if (!CacheLocal._instance) {
      CacheLocal._instance = new CacheLocal(parseInt(process.env.LOCAL_CACHE_TTL, 10))
    }
    return CacheLocal._instance
  }

  public get<T>(key: Key): T | undefined {
    return this.cache.get<T>(key)
  }

  public set<T>(key: Key, value: T): void {
    this.cache.set(key, value)
  }
}

export default CacheLocal.getInstance()