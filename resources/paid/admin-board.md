# SMDZ Admin Board – Documentation

<div align="center" style="margin-bottom: 1.5rem;">

  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/VIDEO_ID_HERE"
    title="smdz_adminboard showcase"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    style="max-width: 100%; border-radius: 12px;"
  ></iframe>
</div>

> SMDZ Admin Board is a persistent, fullscreen administrative workspace for FiveM servers.
> It provides workspaces, Kanban boards, tasks, labels, calendars, staff management, activity logs, persistent notifications, and real-time synchronization from a single in-game interface.

---

# 🧩 **OVERVIEW:**

- 📌 **Name:** `smdz_adminboard`
- 💻 **Author:** SMDZ Studios
- 🧭 **Framework:** Standalone / ESX / QBCore / Qbox
- 🧾 **Version:** `2.0.0`
- ✅ **Status:** <span class="badge badge--stable">STABLE</span>



**Short description:**
SMDZ Admin Board is a complete in-game management system designed for FiveM staff teams. It combines persistent Kanban boards, task tracking, member permissions, activity history, notifications, attachments, and live presence without relying on ACE permissions or framework administration groups.

---

# 📦 **REQUIREMENTS:**

- **FiveM server:** Latest recommended server artifact.
- **Framework:** Standalone, ESX, QBCore, or Qbox.
- **Required dependencies:**
  - `oxmysql`
  - MySQL `8.0+` or MariaDB `10.6+`
- **Required for every panel user:**
  - The Steam desktop client must be open and detected by FiveM.
- **Optional integrations:**
  - `es_extended`, `qb-core`, or `qbx_core` for character names and framework data.
  - A Steam Web API key for more reliable official Steam profile names and avatars.
  - `ox_lib`, QBCore, or ESX notifications when available; otherwise, the script uses the native GTA V feed.
- **Only required when rebuilding the interface:**
  - Node.js and npm.

> Steam is a mandatory security requirement in this version and cannot be disabled through configuration.

---

# 📥 **INSTALLATION:**

1. Download the resource: `smdz_adminboard.zip`.
2. Remove any previous version of `smdz_adminboard` before installing the new files.
3. Extract the folder into your FiveM `resources` directory, for example:

```text
resources/[smdz]/smdz_adminboard
```

4. Open `config.lua` and replace the example owner identifier with one or more valid FiveM identifiers:

```lua
Config.IdentifierType = 'license'

Config.OwnerIdentifiers = {
    'license:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
}
```

5. Review `server_config.lua` and configure or remove the private Discord webhook URLs.
6. Add the resources to your `server.cfg` in the correct order:

```bash
## Database
ensure oxmysql

## SMDZ Studios
ensure smdz_adminboard
```

7. Optionally add a server-only Steam Web API key:

```bash
set smdz_adminboard_steam_api_key "YOUR_STEAM_WEB_API_KEY"
```

8. Restart your server or start the resource manually:

```bash
start smdz_adminboard
```

9. Check the server console for initialization errors.
10. Join the server with Steam open and use `/adminboard` or the configured keybind.

The resource automatically creates and updates the required database tables. The included `sql/smdz_adminboard.sql` file can be used for manual inspection or recovery, but a normal fresh installation does not require a manual SQL import.

---

# ⚙️ **CONFIGURATION:**

The main shared configuration is located in `config.lua`. Private Discord webhook URLs and server-only log settings are stored in `server_config.lua`.

```lua
Config = {}

-- Framework and language
Config.Framework = 'auto' -- auto, standalone, esx, qbcore, qbox
Config.Locale = 'en' -- en, es, fr, de
Config.Debug = true

-- Command and keybind
Config.Command = 'adminboard'
Config.Keybind = 'F7'
Config.KeybindEnabled = true

-- Initial database content
Config.CreateDefaultBoard = true
Config.DefaultBoardName = nil

Config.DefaultWorkspace = {
    Name = 'Administration',
    Description = 'Administrative and operational server management.',
    Icon = 'ShieldCheck',
    Color = '#8e8e93',
    Visibility = 'staff'
}

-- Persistent identification and owners
Config.IdentifierType = 'license'
Config.OwnerIdentifiers = {
    'license:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
}

Config.SteamProfiles = {
    CacheMinutes = 60,
    RequestTimeoutMs = 8000,
    CommunityFallback = true
}

-- Interface
Config.UI = {
    DefaultTheme = 'dark',
    AllowThemeChange = true,
    DefaultView = 'kanban',
    EnableAnimations = true,
    CloseWithEscape = true
}

-- Tasks
Config.Tasks = {
    PublicIdPrefix = 'ADM',
    EnforceWipLimits = true,
    MaxTitleLength = 180,
    MaxDescriptionLength = 20000,
    MaxCommentLength = 5000,
    MaxChecklistItemLength = 500,
    AllowMultipleAssignees = true,
    EnableSubtasks = true,
    EnableDependencies = true,
    EnableTimeTracking = true
}

-- Notifications
Config.Notifications = {
    Enabled = true,
    InGameEnabled = true,
    ShowWhenUiOpen = true,
    DurationMs = 6500,
    PlaySound = true,
    DueSoonHours = 24,
    CheckIntervalMinutes = 5,
    NotifyDueSoon = true,
    NotifyOverdue = true,
    NotifyMentions = true,
    NotifyAssignments = true,
    NotifyComments = true,
    NotifyCompletion = true
}

-- Attachments
Config.Attachments = {
    Enabled = true,
    Mode = 'hybrid',
    MaxFilesPerTask = 15,
    MaxFileSizeMB = 10,
    MaxPastedImageMB = 2,
    MaxPastedDimension = 1920,
    ThumbnailDimension = 360,
    AllowedTypes = {
        'image/png',
        'image/jpeg',
        'image/webp',
        'image/gif',
        'application/pdf'
    }
}

-- Real-time synchronization and security
Config.Realtime = {
    Enabled = true,
    Presence = true
}

Config.Audit = {
    Enabled = true,
    LogReads = false
}

Config.RateLimits = {
    windowMs = 10000,
    maxRequests = 45
}
```

For each important option:

- `Config.Framework` – selects the framework bridge. Use `auto` to detect ESX, QBCore, or Qbox automatically, or fall back to standalone mode.
- `Config.Locale` – controls all visible interface text, notifications, errors, console messages, and Discord embeds. Officially supported values are `en`, `es`, `fr`, and `de`.
- `Config.Debug` – enables additional diagnostic console output. Disable it on production servers unless troubleshooting.
- `Config.Command` – command used to request access to the panel.
- `Config.Keybind` – default keyboard key registered through FiveM key mappings.
- `Config.KeybindEnabled` – disables only the keyboard shortcut when set to `false`; the command remains available.
- `Config.CreateDefaultBoard` – creates the initial board when the database contains no boards.
- `Config.DefaultBoardName` – overrides the translated default board name. Leave it as `nil` to use the locale value.
- `Config.DefaultWorkspace` – seeds the first workspace on a fresh database. All later workspace management is performed in-game.
- `Config.IdentifierType` – selects the preferred persistent identifier type: `license`, `license2`, `steam`, `fivem`, or `discord`.
- `Config.OwnerIdentifiers` – defines the only special role. Owners always have every capability and are the only users allowed to invite members, remove members, and edit member permissions.
- `Config.UI.DefaultTheme` – initial theme used before the member saves personal preferences.
- `Config.SteamProfiles.CacheMinutes` – controls how long resolved Steam profile information remains cached.
- `Config.SteamProfiles.RequestTimeoutMs` – timeout used for Steam profile HTTP requests.
- `Config.SteamProfiles.CommunityFallback` – allows the script to use the Steam Community profile fallback when the official API is unavailable.
- `Config.UI.DefaultView` – initial section opened by default, such as `kanban` or `dashboard`.
- `Config.UI.AllowThemeChange`, `EnableAnimations`, and `CloseWithEscape` – compatibility settings included in the shared configuration. In the compiled version `2.0.0` interface, theme controls, animations, and Escape handling are provided by the UI and are not fully controlled as runtime switches by these three values.
- `Config.Tasks.PublicIdPrefix` – prefix used for public task codes, such as `ADM-0001`.
- `Config.Tasks.EnforceWipLimits` – prevents columns from exceeding their configured work-in-progress limit.
- `Config.Tasks.MaxTitleLength` – maximum number of characters allowed in a task title.
- `Config.Tasks.MaxDescriptionLength` – maximum number of characters allowed in a task description.
- `Config.Tasks.MaxCommentLength` – maximum number of characters allowed in a comment.
- `Config.Tasks.MaxChecklistItemLength` – maximum number of characters allowed in a checklist item.
- `Config.Tasks.AllowMultipleAssignees` – allows a task to contain more than one assigned member.
- `Config.Tasks.EnableSubtasks`, `EnableDependencies`, and `EnableTimeTracking` – reserved task capability flags included in the current configuration and database structure. They do not provide separate complete UI workflows in version `2.0.0`.
- `Config.Notifications.Enabled` – enables the persistent SQL notification system.
- `Config.Notifications.InGameEnabled` – displays notifications outside the NUI through the detected notification bridge.
- `Config.Notifications.ShowWhenUiOpen` – controls whether in-game notifications are also displayed while the board is open.
- `Config.Notifications.DueSoonHours` – determines how many hours before a due date a task is considered due soon.
- `Config.Notifications.CheckIntervalMinutes` – controls how often due and overdue tasks are checked.
- `Config.Attachments.Enabled` – enables task evidence and attachments.
- `Config.Attachments.Mode` – documents the intended attachment mode. Version `2.0.0` supports direct URLs and pasted images while attachments are enabled.
- `Config.Attachments.MaxFilesPerTask` – maximum number of attachments stored for one task.
- `Config.Attachments.MaxFileSizeMB` – reserved limit for direct binary file upload integrations; direct URL attachments do not upload the remote file to the server.
- `Config.Attachments.MaxPastedImageMB` – server-side size limit for pasted image uploads.
- `Config.Attachments.AllowedTypes` – MIME types accepted by the server.
- `Config.Realtime.Enabled` – enables live board synchronization between connected staff members.
- `Config.Realtime.Presence` – shows whether members are online and which board, view, or task they are currently viewing.
- `Config.Audit.Enabled` – records administrative activity in SQL.
- `Config.Audit.LogReads` – reserved audit configuration flag. Version `2.0.0` records write activity, while read-only action logging is not exposed as a separate complete workflow.
- `Config.RateLimits.windowMs` and `maxRequests` – limit NUI-to-server requests per player to protect the resource from request spam.
- `Config.CustomIdentifier` – optional function for resolving a custom persistent identifier. Return `nil` to keep the normal identifier behavior.

### Private Discord logs

`server_config.lua` is loaded only by the server. Never place private webhook URLs in `config.lua`, client files, or the NUI source.

```lua
ServerConfig.DiscordLogs = {
    Enabled = true,

    Identity = {
        Username = nil,
        AvatarUrl = '',
        Footer = nil
    },

    Delivery = {
        QueueIntervalMs = 750,
        MaxRetries = 2,
        RetryDelayMs = 1500
    },

    Webhooks = {
        Default = '',

        Tasks = {
            Created = '',
            Updated = '',
            Moved = '',
            Archived = ''
        }
    }
}
```

- `ServerConfig.DiscordLogs.Enabled` – globally enables or disables Discord log delivery.
- `Identity` – customizes the bot username, avatar, and footer used by embeds.
- `Delivery` – controls the webhook queue interval and retry behavior.
- `Webhooks.Default` – fallback webhook used when a more specific event URL is not configured.
- Event-specific webhook entries – allow tasks, comments, columns, checklists, attachments, boards, workspaces, labels, members, and notifications to use separate URLs.
- Set an individual webhook entry to an empty string to disable only that exact event.


---

# 🔐 **PERMISSIONS:**

SMDZ Admin Board uses its own persistent capability system. It does not inherit ACE permissions or framework administration groups. Owners are defined in `Config.OwnerIdentifiers`, while invited members receive individual capabilities stored in `smdz_adminboard_members`.

### Permission levels

| Level | Meaning |
|---|---|
| **Required** | Automatically enabled and necessary for every invited member. |
| **Standard** | Intended for normal day-to-day staff work. |
| **Elevated** | Changes structure, assignments, shared content, or another member's content. |
| **Dangerous** | Can remove data, broaden access, or perform actions marked as sensitive by the interface. Grant only to trusted administrators. |
| **Owner only** | Cannot be assigned to a normal member. The server independently verifies owner status. |
| **Reserved** | Present for forward compatibility, but no complete user-facing workflow is available in version `2.0.0`. |

### Complete permission reference

| Area | Capability | What it allows | Level | Recommended for |
|---|---|---|---|---|
| Access | `adminboard.open` | Opens and uses the panel after Steam, membership, and session checks succeed. It is always enabled for active members. | **Required** | Every invited member |
| Boards | `adminboard.boards.manage` | Full board administration: create, edit, delete, and manage private-board viewers. It also bypasses private-board membership inside workspaces the member can already access. | **Dangerous** | Senior board administrators |
| Boards | `adminboard.boards.access.manage` | Changes the viewer list of private boards and allows access to private boards inside accessible workspaces. It does not edit board details or delete boards by itself. | **Dangerous** | Trusted board administrators |
| Boards | `adminboard.boards.create` | Creates boards inside workspaces the member can access. When creating a private board without access-management permission, the creator is retained as an authorized viewer. | **Elevated** | Team leads |
| Boards | `adminboard.boards.edit` | Changes a board's name, description, image, accent color, and visibility. It does not manage the private viewer list. | **Elevated** | Team leads and board editors |
| Boards | `adminboard.boards.delete` | Soft-deletes and archives an accessible board, removing it from the active workflow. | **Dangerous** | Senior administrators only |
| Workspaces | `adminboard.workspaces.manage` | Full workspace administration: create, edit, and delete workspaces. It also grants visibility into all active private workspaces. | **Dangerous** | Senior administrators only |
| Workspaces | `adminboard.workspaces.create` | Creates new persistent workspaces and automatically adds the creator to the new workspace. | **Elevated** | Department or team leads |
| Workspaces | `adminboard.workspaces.edit` | Edits active workspaces and grants visibility into all active private workspaces, even without explicit workspace membership. | **Elevated** | Trusted workspace administrators |
| Workspaces | `adminboard.workspaces.delete` | Soft-deletes an empty workspace. Active boards must be removed first. It also grants visibility into all active private workspaces. | **Dangerous** | Senior administrators only |
| Labels | `adminboard.labels.manage` | Full label-catalog control: create, edit, and delete labels in accessible workspaces. | **Elevated** | Workspace administrators |
| Labels | `adminboard.labels.create` | Creates reusable labels inside accessible workspaces. | **Standard** | Staff responsible for organization |
| Labels | `adminboard.labels.edit` | Renames labels and changes their colors. Existing task associations remain in place. | **Standard** | Staff responsible for organization |
| Labels | `adminboard.labels.delete` | Permanently deletes a label and removes it from every task using it. | **Dangerous** | Trusted workspace administrators |
| Labels | `adminboard.labels.apply` | Assigns existing workspace labels to tasks or removes them from tasks. | **Standard** | Regular staff members |
| Columns | `adminboard.columns.manage` | Creates, renames, reorders, configures, and deletes board columns, including work-in-progress limits. | **Elevated** | Board administrators |
| Tasks | `adminboard.tasks.create` | Creates tasks inside accessible boards. Assigning members during creation additionally requires `adminboard.tasks.assign`. | **Standard** | Regular staff members |
| Tasks | `adminboard.tasks.edit` | Edits task content, status, priority, type, due date, and progress. Changing assignees additionally requires `adminboard.tasks.assign`. | **Standard** | Regular staff members |
| Tasks | `adminboard.tasks.move` | Moves and reorders tasks between columns. Configured work-in-progress limits remain enforced. | **Standard** | Regular staff members |
| Tasks | `adminboard.tasks.archive` | Archives a task and removes it from the active board workflow. | **Dangerous** | Team leads and administrators |
| Tasks | `adminboard.tasks.assign` | Adds or removes responsible members on tasks. | **Elevated** | Supervisors and team leads |
| Comments | `adminboard.comments.create` | Creates comments and allows members to edit or delete their own comments. | **Standard** | Regular staff members |
| Comments | `adminboard.comments.manage` | Edits or deletes comments written by other members. | **Dangerous** | Moderators and senior administrators |
| Checklists | `adminboard.checklists.manage` | Creates checklists and checklist items, changes completion state, and removes checklist items. | **Standard** | Regular staff members |
| Attachments | `adminboard.attachments.manage` | Adds and removes direct links, pasted images, and task evidence. Reading an accessible attachment only requires panel access. | **Dangerous** | Trusted staff handling evidence |
| Members | `adminboard.members.avatars.edit` | Changes another non-owner member's avatar mode or custom avatar URL. Members can always edit their own avatar. | **Dangerous** | Trusted administrators |
| Members | `adminboard.members.manage` | Invites members, removes members, and changes member capabilities. | **Owner only** | Configured owners only |
| Reporting | `adminboard.statistics.view` | Reserved for restricted administrative statistics and system metrics. The normal board dashboard does not currently require it. | **Reserved** | Do not grant unless required by a future update |
| Audit | `adminboard.audit.view` | Opens detailed audit information beyond the member's normal accessible-board context. Members can still view activity for boards they already access. | **Elevated** | Supervisors and auditors |
| Settings | `adminboard.settings.manage` | Reserved for shared administrative settings. Personal interface preferences currently require only panel access. | **Reserved** | Do not grant unless required by a future update |
| Data | `adminboard.data.export` | Reserved for administrative data-export workflows that are not exposed in version `2.0.0`. | **Reserved** | Do not grant unless required by a future update |

### Important permission behavior

- **Use granular permissions whenever possible.** The broad `boards.manage`, `workspaces.manage`, and `labels.manage` capabilities include their related destructive actions.
- **Permission and access are separate checks.** A member may have permission to edit tasks but still be unable to use it on a workspace or board they cannot access.
- **Permissions passed together by a server handler use OR logic.** For example, board creation accepts either `adminboard.boards.create` or `adminboard.boards.manage`.
- **Owners always receive every capability.** Normal members can never receive `adminboard.members.manage`; manually inserting it into SQL is sanitized and ignored.
- **No capability bypasses Steam detection, active membership, NUI authorization, workspace access, board access, rate limits, or server-side validation.**
- **Revoking access is immediate.** Removing a member or invalidating their access forces an active panel session to close.

---

# 🛡️ **RECOMMENDED PERMISSION PRESETS:**

The following presets are safe starting points. Adjust them to match your staff structure, and follow the principle of least privilege instead of enabling every capability by default.

| Preset | Intended use | Suggested capabilities | Important notes |
|---|---|---|---|
| **Read-only member** | Staff who only need to review boards, tasks, activity, and attachments. | `adminboard.open` | Access is still limited by workspace and board visibility. |
| **Staff contributor** | Regular staff who create and maintain their own operational work. | `adminboard.open`, `adminboard.tasks.create`, `adminboard.tasks.edit`, `adminboard.tasks.move`, `adminboard.comments.create`, `adminboard.checklists.manage`, `adminboard.labels.apply` | Does not assign other members, change board structure, archive tasks, or remove shared content. |
| **Team lead** | Supervisors who organize work and assign responsibility. | Staff contributor permissions, plus `adminboard.tasks.assign`, `adminboard.columns.manage`, `adminboard.labels.create`, `adminboard.labels.edit`, and optionally `adminboard.attachments.manage` | Add `adminboard.tasks.archive` only when the lead should be able to remove tasks from the active workflow. |
| **Safe board administrator** | Administrators responsible for creating and configuring boards without broad deletion rights. | Team lead permissions, plus `adminboard.boards.create`, `adminboard.boards.edit`, `adminboard.boards.access.manage`, `adminboard.comments.manage`, and `adminboard.audit.view` | Prefer these granular capabilities over `adminboard.boards.manage`. Add `adminboard.boards.delete` separately only when genuinely required. |
| **Safe workspace administrator** | Administrators responsible for workspace structure and shared labels. | Safe board administrator permissions, plus `adminboard.workspaces.create`, `adminboard.workspaces.edit`, `adminboard.labels.create`, and `adminboard.labels.edit` | `adminboard.workspaces.edit` grants visibility into active private workspaces. Keep `adminboard.workspaces.delete`, `adminboard.labels.delete`, and the broad `adminboard.labels.manage` capability separate. |
| **Owner** | The person responsible for membership, permissions, and unrestricted administration. | Add the exact identifier to `Config.OwnerIdentifiers`. | Owners receive all capabilities automatically and are the only users who can invite, remove, or reconfigure members. |

> Avoid giving broad `*.manage` permissions merely for convenience. Granular permissions reduce accidental deletion and keep private areas limited to the staff members who genuinely need them.

---

# 🎮 USAGE:

Staff members use the script through a fullscreen in-game NUI. Every opening request is validated by the server, requires Steam to be detected, and checks the member's stored capabilities before the interface is opened.

### Commands

| Command | Description | Permission / Notes |
|---|---|---|
| `/adminboard` | Requests access to the SMDZ Admin Board interface. | Requires Steam and the `adminboard.open` capability. The command name is configurable. |

### Keybinds

- Default key: `F7` – opens the main board interface.
- `Escape` – closes the current task sheet first, then closes the interface.
- `N` – opens the new task modal while the interface is active, provided the member has the task creation capability.
- The opening key can be changed in FiveM key bindings or through `Config.Keybind`.
- Set `Config.KeybindEnabled = false` to disable the registered shortcut while keeping `/adminboard` available.

### UI / Menus

- **Dashboard** – displays high-level board statistics, workload information, priorities, and task status summaries.
- **Kanban** – manages tasks by column with drag-and-drop movement, ordering, and work-in-progress limits.
- **Table** – provides a structured task list for searching, filtering, and reviewing board data.
- **Calendar** – displays tasks by due date and allows direct navigation to the related task.
- **Activity** – shows persistent administrative history, contextual changes, and notification activity.
- **Members** – displays staff profiles, Steam avatars, online status, last connection, current board, current section, and active task when available.
- **Settings** – manages personal theme, density, sidebar state, and displays the member's current capabilities.
- **Workspaces** – separate departments, teams, or operational areas with independent names, icons, colors, visibility, and boards.
- **Boards** – create public, staff, or private boards and grant access to specific members.
- **Labels** – create reusable workspace labels and apply them to tasks.
- **Tasks** – manage title, description, priority, type, status, dates, progress, assignees, labels, comments, checklists, and evidence.
- **Attachments** – attach direct URLs or paste supported images with `Ctrl+V`; pasted images are compressed, stored in SQL, and displayed with thumbnails.
- **Notifications** – persistent assignment, comment, mention, due-soon, overdue, priority, blocked, and completion notifications with read/unread status.
- **Profile avatars** – use the member's Steam avatar or a direct custom image URL ending in `.png`, `.jpg`, `.jpeg`, `.webp`, `.gif`, or `.avif`.

---

# 🔌 **EVENTS & EXPORTS (DEVELOPERS):**

Use this section for server owners and developers who integrate the script with other resources.

> The network events below are internal transport events used by the protected NUI request flow. They are documented for technical reference only and should not be treated as a stable public API. Use the provided exports for external integrations.

### Server Events

```lua
-- Internal request transport used by the SMDZ Admin Board NUI.
-- External resources should use the documented exports instead.
TriggerServerEvent('smdz_adminboard:server:request', requestId, action, payload)
```

| Event name | Parameters | Description |
|---|---|---|
| `smdz_adminboard:server:canOpen` | `boardId`, `taskId`, `clientNonce` | Starts the protected panel opening handshake and validates Steam and panel access. |
| `smdz_adminboard:server:confirmOpen` | `clientNonce`, `serverToken` | Confirms the server-issued opening challenge before authorizing the NUI session. |
| `smdz_adminboard:server:refreshSteamCheck` | `requestId` | Rechecks whether Steam is currently detected for the requesting player. |
| `smdz_adminboard:server:sessionClosed` | None | Removes the player's active board session and real-time presence state. |
| `smdz_adminboard:server:request` | `requestId`, `action`, `payload` | Routes validated NUI actions through server-side permissions, access checks, and rate limits. |

### Client Events

```lua
-- Example of listening for a synchronized board update.
-- Do not replace the built-in handler unless you are maintaining a custom fork.
AddEventHandler('smdz_adminboard:client:sync', function(eventName, payload)
    print(('[smdz_adminboard] Received sync event: %s'):format(eventName))
end)
```

| Event name | Parameters | Description |
|---|---|---|
| `smdz_adminboard:client:openChallenge` | `payload` | Receives the protected opening challenge generated by the server. |
| `smdz_adminboard:client:open` | `payload` | Opens the NUI after the challenge, Steam, and access validations succeed. |
| `smdz_adminboard:client:denied` | `message`, `code` | Rejects an opening request and displays the related access error. |
| `smdz_adminboard:client:forceClose` | `message`, `code` | Immediately closes the interface after access, membership, board, or Steam validation is lost. |
| `smdz_adminboard:client:notification` | `payload` | Displays a persistent board notification through the detected in-game notification bridge. |
| `smdz_adminboard:client:sync` | `eventName`, `payload` | Synchronizes board, task, member, notification, and presence changes with an open NUI. |
| `smdz_adminboard:client:response` | `requestId`, `result` | Returns the result of an internal NUI server request to the matching client callback. |
| `smdz_adminboard:client:steamRefreshResult` | `payload` | Returns the result of a manual Steam detection refresh. |

### Exports

```lua
-- Client: open the panel and optionally select a board.
exports['smdz_adminboard']:OpenAdminBoard(boardId)

-- Client: open the panel directly on a task.
exports['smdz_adminboard']:OpenTask(taskId)

-- Server: check one capability for a player.
local canCreateTasks = exports['smdz_adminboard']:HasPermission(
    source,
    'adminboard.tasks.create'
)

-- Server: retrieve all resolved capabilities for a player.
local capabilities = exports['smdz_adminboard']:GetCapabilities(source)
```

| Export name | Side | Parameters | Returns | Description |
|---|---|---|---|---|
| `OpenAdminBoard` | Client | `boardId` (optional number) | `nil` | Requests the protected panel opening flow and optionally selects a board. |
| `OpenTask` | Client | `taskId` (number) | `nil` | Requests the protected panel opening flow and opens a specific accessible task. |
| `HasPermission` | Server | `source` (number), `permission` (string) | `boolean` | Checks the player's resolved owner or member capability. |
| `GetCapabilities` | Server | `source` (number) | `table` | Returns the player's complete resolved capability table. |

External resources cannot use the opening exports to bypass Steam, membership, workspace access, board access, or server-side permission checks.

---

# 🧪 **COMMON ISSUES:**

| Issue | Likely cause | Solution |
|---|---|---|
| **The resource does not start** | `oxmysql` is not running first, the folder name is incorrect, the resource is missing from `server.cfg`, or a Lua/SQL dependency error occurred. | Start `oxmysql` before `smdz_adminboard`, keep the exact folder name `smdz_adminboard`, add `ensure smdz_adminboard`, and review the server console for the first reported error. |
| **The interface says Steam is required** | FiveM did not detect an active Steam desktop session. | Completely close FiveM, open and sign in to the Steam desktop client, wait until Steam is fully running, reopen FiveM, and use the refresh button after its cooldown. Steam enforcement cannot be disabled. |
| **The owner cannot open the panel** | The configured owner identifier is incorrect, missing its prefix, or Steam is not detected. | Copy the exact FiveM identifier, including `license:`, `discord:`, or the selected prefix, add it to `Config.OwnerIdentifiers`, restart the resource, and confirm Steam is running. Owner status does not bypass Steam. |
| **An invited member receives access denied** | The member is inactive, lacks `adminboard.open`, or cannot access the selected workspace or board. | Confirm the membership is active, verify the required capability, and review workspace and board visibility. Private boards require explicit access unless the member can manage board access. |
| **Database tables are missing or SQL errors appear** | The database connection is invalid, the database user lacks schema permissions, or the database version is unsupported. | Verify the `oxmysql` connection, grant the database user permission to create and alter tables, use MySQL `8.0+` or MariaDB `10.6+`, and use `sql/smdz_adminboard.sql` only when manual recovery is necessary. |
| **The UI is black, blank, or never finishes loading** | Old compiled NUI files were merged with the current build, an active bundle is missing, or the FiveM cache contains an outdated version. | Delete the old resource folder before installing the update, deploy the complete current `web/dist` folder together, confirm the active HTML/JS/CSS files exist, clear the FiveM client cache, and inspect the F8 console for CEF errors. |
| **Steam avatars or profile names do not load** | The Steam Web API key is missing or invalid, the profile cannot be resolved, or Steam services are temporarily unavailable. | Add `set smdz_adminboard_steam_api_key "YOUR_STEAM_WEB_API_KEY"` to `server.cfg`, keep the key server-only, verify the Steam profile, and leave the community fallback enabled when appropriate. |
| **Discord logs are not delivered** | Logging is disabled, the selected event webhook is empty, the webhook was deleted, or delivery is failing. | Set `ServerConfig.DiscordLogs.Enabled = true`, configure the event-specific or default webhook, verify the webhook still accepts messages, and check the server console for queue or retry errors. |
| **Pasted images or attachments are rejected** | Attachments are disabled, the MIME type is not allowed, the image exceeds its size limit, or the task reached its attachment limit. | Enable attachments, review `Config.Attachments.AllowedTypes`, reduce the image below `MaxPastedImageMB`, and confirm the task has fewer than `MaxFilesPerTask` attachments. |
| **Changes do not synchronize between staff members** | Real-time synchronization is disabled, the users are not authorized for the same board, or a NUI/server request was interrupted. | Set `Config.Realtime.Enabled = true`, confirm both members retain access to the board and Steam authorization, and review the server and F8 consoles for request or synchronization errors. |

---

# ❓ **FAQ:**

| Question | Answer |
|---|---|
| Can the Steam requirement be disabled? | No. Steam detection is a fixed security requirement in version `2.0.0` and has no configuration toggle. |
| Does the resource use ACE permissions? | No. Owners and member capabilities are managed through `Config.OwnerIdentifiers`, the in-game Members view, and persistent SQL records. |
| Does it use ESX, QBCore, or Qbox admin groups? | No. Framework bridges are used only for compatible player and character information. Authorization remains independent. |
| Can I configure more than one owner? | Yes. Add multiple exact identifiers to `Config.OwnerIdentifiers`. Every configured owner receives all capabilities. |
| Can an offline player be invited? | Yes. An owner can enter the player's exact persistent FiveM identifier manually. |
| Are member permissions persistent? | Yes. Member state and capabilities are stored in the `smdz_adminboard_members` table. |
| Are workspaces, boards, tasks, comments, and notifications persistent? | Yes. Administrative data is stored in SQL and survives resource and server restarts. |
| Do I need to import the SQL file manually? | Normally, no. The resource creates and migrates missing tables automatically. The SQL file is included for inspection and manual recovery. |
| Can I create private boards? | Yes. Boards support public, staff, and private visibility, plus explicit member access. |
| Can different members have different permissions? | Yes. Owners can enable or disable individual capabilities for every non-owner member. |
| Can a removed member keep the panel open? | No. Removing a member revokes access and forces the active panel session to close. |
| Can I open the panel from another resource? | Yes. Use the client export `OpenAdminBoard`, optionally passing a board ID. All normal security checks still apply. |
| Can I open a specific task from another resource? | Yes. Use the client export `OpenTask` with the task ID. The player must still be authorized to access that task's board. |
| Can other resources check Admin Board permissions? | Yes. Use the server exports `HasPermission` and `GetCapabilities`. |
| Are the documented network events a public API? | No. They are internal protected transport events. External integrations should use exports instead. |
| Can Discord logs use different webhooks? | Yes. Each supported activity and notification type can have its own server-only webhook URL. |
| Can one Discord log type be disabled without disabling the others? | Yes. Set only that event's webhook URL to an empty string. |
| Can users choose a custom avatar? | Yes. They can use their Steam avatar or a direct supported image URL. Authorized members can also edit other non-owner avatars. |
| Can the interface theme be changed? | Yes. The compiled version `2.0.0` UI provides dark, light, and system themes and saves the selected preference per user. |
| Does the script support real-time presence? | Yes. It can display whether a member is online and which board, view, or task is currently open. |
| Can I rebuild the NUI? | Yes. Run `npm install` and `npm run build` inside the `web` directory, then deploy the newly generated `web/dist` files together. |
| Should I publish `server_config.lua` with real webhook URLs? | No. Replace real URLs with empty values or placeholders before sharing the resource with untrusted people. |
