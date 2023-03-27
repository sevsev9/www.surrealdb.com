# %%
"""Example of how to use the SurrealDB client in a notebook"""

from surrealdb import Surreal

db = Surreal("http://localhost:8000")
await db.connect()
await db.signin({"user": "root", "pass": "root"})
await db.use("test", "test")

# %%
await db.create(
    "person",
    {
        "user": "me",
        "pass": "safe",
        "marketing": True,
        "tags": ["python", "documentation"],
    },
)

# %%
await db.select("person")

# %%
await db.update("person", {
    "user":"you",
    "pass":"very_safe",
    "marketing": False,
    "tags": ["Awesome"]
})

# %%
await db.delete("person")