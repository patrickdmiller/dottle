import {Server} from './server/Server'
import {Redis} from './store/redis'

const redis = new Redis();
// redis.connect();

(new Server(redis)).start();