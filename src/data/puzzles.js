// A small bank of logic + programming puzzles for the "Debug Challenge"
// widget. One is picked deterministically per calendar day (so every
// visitor sees the same "today's challenge"), with a shuffle button to
// browse the rest. Add more entries any time — nothing else needs to change.

export const puzzles = [
  {
    difficulty: 'easy',
    prompt: 'A REST endpoint returns 429 on the 6th request within a minute, then 200 again after 60s. What pattern is being enforced?',
    options: ['Rate limiting', 'Load balancing', 'Circuit breaking', 'Cache eviction'],
    answer: 0,
    explanation: '429 Too Many Requests is the standard status for rate limiting — capping calls per client within a time window.'
  },
  {
    difficulty: 'easy',
    prompt: "Find the bug: `for (int i = 0; i <= arr.length; i++) { sum += arr[i]; }`",
    options: ['Off-by-one: should be i < arr.length', 'sum was never initialized', 'Should use a while loop', 'No bug — this is correct'],
    answer: 0,
    explanation: 'Using <= reads one index past the end of the array, throwing an ArrayIndexOutOfBoundsException.'
  },
  {
    difficulty: 'medium',
    prompt: 'Two threads increment the same counter without synchronization. What class of bug is this?',
    options: ['Race condition', 'Memory leak', 'Stack overflow', 'Null pointer exception'],
    answer: 0,
    explanation: 'Concurrent unsynchronized writes to shared state is the textbook definition of a race condition — the final value depends on thread interleaving.'
  },
  {
    difficulty: 'medium',
    prompt: 'A JWT is stored in localStorage instead of an httpOnly cookie. What attack becomes easier?',
    options: ['XSS-based token theft', 'SQL injection', 'DNS spoofing', 'Clickjacking'],
    answer: 0,
    explanation: 'localStorage is readable by any JS on the page, so an XSS vulnerability can exfiltrate the token directly. httpOnly cookies are hidden from JS.'
  },
  {
    difficulty: 'medium',
    prompt: 'A Spring Boot service works locally but throws "Connection refused" only inside Docker. Most likely cause?',
    options: ['Using localhost instead of the service name in the DB URL', 'Wrong Java version', 'Missing @RestController annotation', 'Corrupted JAR file'],
    answer: 0,
    explanation: "Inside Docker, 'localhost' refers to the container itself, not the host or another container — you need the service name from docker-compose networking."
  },
  {
    difficulty: 'hard',
    prompt: 'What does this print? `System.out.println(0.1 + 0.2 == 0.3);`',
    options: ['false', 'true', 'Compile error', 'NaN'],
    answer: 0,
    explanation: 'Floating point numbers can\u2019t represent 0.1 or 0.2 exactly in binary, so the sum is 0.30000000000000004 — never compare floats with ==.'
  },
  {
    difficulty: 'hard',
    prompt: 'An index on a low-cardinality column (e.g. a boolean "is_active") barely speeds up queries. Why?',
    options: ['Too few distinct values for the optimizer to narrow the scan much', 'Indexes only work on primary keys', 'Booleans cannot be indexed', 'The table needs a foreign key first'],
    answer: 0,
    explanation: 'With only 2 possible values, an index still has to scan roughly half the table — the selectivity is too low to be much better than a full scan.'
  },
  {
    difficulty: 'medium',
    prompt: 'Riddle: I am incremented on every commit, reset on every major release, and I am not the version number itself. What am I?',
    options: ['The build/patch number', 'The branch name', 'The commit hash', 'The changelog'],
    answer: 0,
    explanation: 'In semantic versioning (MAJOR.MINOR.PATCH), the patch/build number climbs with each change and resets when a major or minor version bumps.'
  },
  {
    difficulty: 'easy',
    prompt: 'Which HTTP status best fits: "the request was valid, but you don\u2019t have permission"?',
    options: ['403 Forbidden', '401 Unauthorized', '400 Bad Request', '404 Not Found'],
    answer: 0,
    explanation: '401 means "who are you?" (not authenticated). 403 means "I know who you are, and you still can\u2019t do this" (not authorized).'
  },
  {
    difficulty: 'hard',
    prompt: 'A cache-aside read pattern shows stale data right after a write. What is the most common root cause?',
    options: ['Writing to the DB but forgetting to invalidate the cache key', 'The cache TTL is too short', 'Using Redis instead of Memcached', 'The database is read-only'],
    answer: 0,
    explanation: 'Cache-aside puts invalidation on you: if a write path updates the DB but skips deleting/updating the corresponding cache key, old data serves until TTL expiry.'
  },
  {
    difficulty: 'medium',
    prompt: 'A microservice retries a failed POST /order 3 times with the same payload and no idempotency key. Worst case?',
    options: ['The order gets created multiple times', 'The service crashes', 'The database schema changes', 'Nothing — POST is always safe to retry'],
    answer: 0,
    explanation: 'POST is not idempotent by default. Retrying a failed call (that may have actually succeeded server-side) without an idempotency key risks duplicate side effects.'
  },
  {
    difficulty: 'easy',
    prompt: 'Logic: If all Spring @Service beans are singletons by default, and a bean stores request data in an instance field, what happens under concurrent requests?',
    options: ['Requests can overwrite each other\u2019s data', 'Each request gets its own bean automatically', 'Spring throws a compile-time error', 'Nothing, singletons are always thread-safe'],
    answer: 0,
    explanation: 'A singleton bean is shared across all requests/threads. Mutable instance state on it is a classic source of hard-to-reproduce concurrency bugs.'
  }
]

// Deterministic "puzzle of the day" — same for every visitor on a given
// calendar date, changes automatically at midnight.
export function puzzleOfTheDay(date = new Date()) {
  const start = new Date(date.getFullYear(), 0, 0)
  const diff = date - start
  const dayOfYear = Math.floor(diff / 86400000)
  return dayOfYear % puzzles.length
}
