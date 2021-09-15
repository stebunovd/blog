# Is your manager a router or a moderator?

*Reading time: ~7 min*

Whether directly or indirectly, software engineering teams need to communicate
with other stakeholders somehow. Often, the organization has a dedicated person
responsible for engineering–stakeholder communication. For simplicity, we’ll
call that person a "manager" (it may also be a project manager, team lead,
business analyst, etc).

In software engineering, communication around the manager organizes itself into
two common modes, with:

- The manager as a **router**, relaying messages from stakeholders to the
  engineering team and back;
- The manager as a **moderator**, overseeing messages flowing freely between
  stakeholders and engineers.

When the manager is a moderator, it's possible to communicate with better
throughput and higher signal quality. However, it also distributes the
responsibility of communication upon the whole team.

Each strategy has pros and cons.

## Router

<img src="https://raw.githubusercontent.com/stebunovd/blog/master/assets/manager-router.png" width="800">

In *router* mode, the manager is responsible for all communication between the
engineering team and the stakeholders. Centralizing communication this way
makes it simpler to understand responsibilities, but it becomes harder to
manage as the project grows.

Pros:
- **Communication is simpler to navigate**. Neither engineers nor stakeholders
  need to guess who is responsible for what.  If the manager is responsible for
  all communication, then everyone talks to the manager first and lets them
  figure it out;
- **The structure is simpler to organize**. Communication is a skill, which not
  everyone is good at. Some people have trouble putting together their
  thoughts, and others just don't enjoy communicating, or do it inefficiently.
  Instead of trying to improve communication across the whole team, it's easier
  to just hire one person with good communication skills;
- **The manager has a reliable way to control processes**. When all
  communication flows through the manager, the manager has immediate access to
  all details. This helps them make sure that the project is consistent and
  going in the right direction;

Cons:
- **A bottleneck emerges**. When one person is the go-between for the work
  communication between multiple people, sooner or later, they become a
  bottleneck. In software terms, we're replacing parallel processing in
  multiple threads with concurrent processing in one thread, which severely
  limits bandwidth;
- **Stakeholders play a game of telephone**. All communication loses something
  in transmission. Two people never understand each other 100% of the time. If
  we need to communicate through mediators, these losses quickly add up;
- **There's a single point of failure**. When people are used to communicating
  through a manager, even short managerial absences create problems. What's
  more, replacing a manager who is sick or on vacation becomes a challenge, as
  the manager has concentrated all the project's information in their heads;
- **It deals poorly with complexity**. When the project is large and complex,
  even a very talented person eventually forgets important details and loses
  track of some updates.

## Moderator

<img src="https://raw.githubusercontent.com/stebunovd/blog/master/assets/manager-moderator.png" width="800">

An alternative approach is *moderator* mode, where the manager supervises while
stakeholders communicate directly with engineering team members. Everyone is
encouraged to talk to everyone else directly. The manager takes part in these
conversations as an observer or guide. Teammates can ask for the manager's
help, or the manager can join a particular group when they see that their help
is needed.

Although this distributed mode of communication removes the drawbacks of the
router method, it requires more organizational discipline.

Pros:
- **Throughput is maximized**. The manager is no longer a bottleneck. Project
  members communicate as much and as frequently as they need;
- **No one plays a game of telephone**. When people participate in discussions
  directly, they get the fullest information.They can ask questions and get
  answers right away;
- **There is no single point of failure**. Since the manager is no longer a
  required party in every dialog with stakeholders, the team can more easily
  tolerate a manager's temporary absence;
- **Openness facilitates creativity**. At all times, a free flow of knowledge
  improves long-term progress. In this model, people get information from more
  varied sources, helping generate new ideas.

Cons:
- **All team members must have reasonably good communication skills**. This
  raises the bar for hiring and gives the manager a new responsibility ─
  communications coach. This raises the bar for the manager's role as well;
- **Private conversations can easily drive the system into chaos**. If someone
  wants to ask someone else a question, the most natural action is to ask their
  peer privately. Unfortunately, private conversations aren't visible to the
  manager and to the other team members. At some point, when people start
  referring to those hidden discussions and agreements, it may be already too
  late. Such situations lead to wasted effort, conflicts, and an overall
  slowdown of the team;
- **Teams need to work with more discipline**. To efficiently organize work in
  moderator mode, each team member must exert some extra effort. In the next
  section, we provide some examples of what that effort means in our case. 
- **When changing to moderator mode, teams may have to overcome social
  inertia**. For some people, the extra effort might also mean breaking their
  old work habits. Not everyone is ready for that.

## Our company experience

Though it requires a bit more team effort, at [ivelum](https://ivelum.com) we
like the moderator mode a lot. It's how all our teams operate by default. For
this mode to work efficiently, we came up with the following guidelines:

1. **Avoid private work conversations**. Every team has a dedicated Slack
  channel, or multiple channels, and we strongly encourage everyone to discuss
  all work topics either there, or in an issue tracker, or in another
  collaboration tool that all team members can easily see. Direct private
  messages are only for private topics, not for regular work discussions;
2. **Foster a safe and open environment**. Some people, especially those who
  joined recently, may be shy to ask their questions in public. To help them
  feel comfortable, it is crucial to ensure that our chats have a safe and
  healthy environment. Sarcasm and jokes about "stupid" questions are strictly
  prohibited, and we watch this closely. A reasonable number of cat pictures
  and funny memes are welcome. Anything related to politics can be discussed
  only in the *#politics* channel, which people can join and leave whenever
  they want;
3. **Write down and share meeting notes**. This is a very old and common
  recommendation, but still, people sometimes forget. Someone in the team must
  watch this and politely ask teammates to share notes after their meetings;
4. **Remove unnecessary access restrictions**. Unless there's an explicit
  reason to restrict access, all work materials, including code, work
  documents, issue trackers, etc. should be available for all project members.

From our experience, new teammates usually adapt to our communication style
within a few weeks. Some of them feel comfortable from day one. Others may need
more time. We try to be welcoming and patient and assist as much as we can.

However, even in our company we have situations where a manager or team lead
has to switch to router mode. In most cases, this is when we temporarily talk
to people who aren't used to this communication style, and it doesn't make
sense for them to adapt to it. Another notable exception is communication with
users of our products. When a user reports a bug or needs consultation, they
usually have just one point of contact. Users rarely want to speak with an
entire development team. 

## Bottom line

As always, there are no silver bullets. Every option has its pros and cons.
Every team, project, and situation are unique. What works for one case might
not work for another. 

It's evident that, as project complexity increases, the router mode becomes
more and more difficult to maintain. Yet, to operate in moderator mode, the
manager has to trust their team's communication judgement, and team members
have to be disciplined about following the communication guidelines.

Though we use both modes at [ivelum](https://ivelum.com), the moderator mode is
our default. We use router mode only in rare cases. Hopefully this article can
help you find the best solution for your situation.
