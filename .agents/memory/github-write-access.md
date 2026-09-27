---
name: GitHub write access
description: Constraints observed when using the connected GitHub integration for repository writes.
---

The connected GitHub OAuth integration can read refs, trees, commits, and blobs, but commit-creation operations may return `FORBIDDEN` even when the connection reports the `repo` scope. Workflow-file updates may also need a scope that is not exposed by the connection.

**Why:** A direct HTTPS push failed without credentials, REST tree creation returned `404`, and GraphQL commit creation returned `FORBIDDEN`; no remote branch update should be assumed after a successful read.

**How to apply:** Before promising a GitHub upload, verify a write-capable endpoint against the current branch head. Never force-push or request tokens from the user; use the managed integration or report the permission boundary.