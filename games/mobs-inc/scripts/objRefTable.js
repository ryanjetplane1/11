const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Audio,
		C3.Plugins.Browser,
		C3.Plugins.Keyboard,
		C3.Plugins.Mouse,
		C3.Plugins.Sprite,
		C3.Behaviors.Bullet,
		C3.Behaviors.Flash,
		C3.Behaviors.scrollto,
		C3.Behaviors.Fade,
		C3.Behaviors.Physics,
		C3.Behaviors.Platform,
		C3.Plugins.Function,
		C3.Plugins.Spritefont2,
		C3.Behaviors.Pin,
		C3.Behaviors.Sin,
		C3.Plugins.Particles,
		C3.Plugins.HTMLElement,
		C3.Plugins.iframe,
		C3.Behaviors.solid,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.Sprite.Cnds.OnAnyAnimFinished,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Spritefont2.Cnds.CompareInstanceVar,
		C3.Plugins.Spritefont2.Acts.SetText,
		C3.Plugins.Spritefont2.Acts.SetEffectParam,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.System.Cnds.ForEachOrdered,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Acts.MoveToTop,
		C3.Plugins.Mouse.Cnds.IsOverObject,
		C3.Plugins.Mouse.Acts.SetCursor,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Mouse.Exps.X,
		C3.Plugins.Mouse.Exps.Y,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Behaviors.Bullet.Acts.SetSpeed,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.Sprite.Cnds.CompareX,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Sprite.Exps.X,
		C3.Behaviors.Bullet.Acts.SetAngleOfMotion,
		C3.Behaviors.Bullet.Acts.SetEnabled,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.System.Exps.max,
		C3.Plugins.System.Exps.dt,
		C3.Plugins.Mouse.Cnds.OnClick,
		C3.Plugins.Sprite.Acts.SetBoolInstanceVar,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Sprite.Cnds.OnDestroyed,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.System.Exps.random,
		C3.Behaviors.scrollto.Acts.Shake,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Behaviors.Bullet.Exps.AngleOfMotion,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Spritefont2.Cnds.OnCreated,
		C3.Plugins.Spritefont2.Acts.SetCharacterWidth,
		C3.Plugins.Spritefont2.Acts.SetLineHeight,
		C3.Behaviors.Fade.Cnds.OnWaitEnd,
		C3.Plugins.Sprite.Exps.UID,
		C3.Behaviors.Fade.Acts.SetFadeInTime,
		C3.Behaviors.Fade.Acts.SetWaitTime,
		C3.Behaviors.Fade.Acts.RestartFade,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.Spritefont2.Acts.SetInstanceVar,
		C3.Plugins.System.Acts.SetVar,
		C3.Behaviors.Pin.Acts.Pin,
		C3.Plugins.Spritefont2.Acts.Destroy,
		C3.Plugins.Spritefont2.Acts.SetPosToObject,
		C3.Plugins.Function.Cnds.OnFunction,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.Function.Acts.CallFunction,
		C3.Plugins.Sprite.Cnds.OnAnimFinished,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Behaviors.Flash.Cnds.IsFlashing,
		C3.Plugins.Sprite.Acts.SubInstanceVar,
		C3.Behaviors.Flash.Acts.Flash,
		C3.Behaviors.Flash.Acts.StopFlashing,
		C3.Plugins.Sprite.Acts.SetEffectParam,
		C3.Plugins.System.Acts.SetTimescale,
		C3.Plugins.System.Acts.SetLayerOpacity,
		C3.Plugins.System.Cnds.LayerCmpOpacity,
		C3.Plugins.System.Exps.layeropacity,
		C3.Plugins.Sprite.Cnds.OnCreated,
		C3.Behaviors.Bullet.Cnds.CompareSpeed,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Cnds.IsOnScreen,
		C3.Plugins.Sprite.Cnds.IsAnimPlaying,
		C3.Plugins.Sprite.Cnds.CompareFrame,
		C3.Plugins.Sprite.Acts.SetScale,
		C3.Plugins.Audio.Cnds.IsTagPlaying,
		C3.Plugins.Audio.Acts.SetVolume,
		C3.Plugins.Audio.Cnds.OnEnded,
		C3.Plugins.Sprite.Acts.SetPosToObject,
		C3.Plugins.Sprite.Acts.SetHeight,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Plugins.Audio.Acts.Stop,
		C3.Plugins.Sprite.Acts.SetSize,
		C3.Plugins.Sprite.Exps.Width,
		C3.Plugins.Sprite.Exps.Height,
		C3.Plugins.Sprite.Cnds.IsMirrored,
		C3.Plugins.Sprite.Acts.SetWidth,
		C3.Plugins.Sprite.Acts.AddInstanceVar,
		C3.Plugins.Particles.Acts.SetAngle,
		C3.Plugins.System.Cnds.Repeat,
		C3.Plugins.System.Exps.int,
		C3.Behaviors.Physics.Acts.ApplyImpulseAtAngle,
		C3.Behaviors.Physics.Acts.SetEnabled,
		C3.Behaviors.Fade.Acts.StartFade,
		C3.Plugins.Sprite.Acts.MoveToBottom,
		C3.Plugins.System.Acts.SetLayerScale,
		C3.Plugins.Sprite.Acts.StopAnim,
		C3.Plugins.Sprite.Cnds.CompareWidth,
		C3.Behaviors.Fade.Cnds.OnFadeOutEnd,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.Mouse.Cnds.OnAnyClick,
		C3.Plugins.Spritefont2.Acts.SetVisible,
		C3.Behaviors.Fade.Acts.SetFadeOutTime,
		C3.Plugins.System.Cnds.OnLayoutEnd,
		C3.Plugins.Sprite.Cnds.IsVisible,
		C3.Plugins.Mouse.Acts.SetCursor2,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Browser.Acts.GoToURLWindow
	];
};
self.C3_JsPropNameTable = [
	{Audio: 0},
	{Browser: 0},
	{Keyboard: 0},
	{Mouse: 0},
	{RandomX: 0},
	{RandomY: 0},
	{isDashing: 0},
	{dashTimer: 0},
	{HP: 0},
	{JumpCooldown: 0},
	{BouleCooldown: 0},
	{MultiCooldown: 0},
	{JumpCooldownMax: 0},
	{BouleCooldownMax: 0},
	{MultiCooldownMax: 0},
	{isRolling: 0},
	{isMultiDashing: 0},
	{isJumping: 0},
	{Mouvement: 0},
	{Flash: 0},
	{Hero: 0},
	{Solid: 0},
	{ScrollTo: 0},
	{Camera: 0},
	{isAttacking: 0},
	{TargetX: 0},
	{TargetY: 0},
	{Speed: 0},
	{Portée: 0},
	{offset: 0},
	{prevX: 0},
	{prevY: 0},
	{lookMob: 0},
	{AngleMarqueur: 0},
	{Marqueurr: 0},
	{RandomSound: 0},
	{Dash: 0},
	{AdDasher: 0},
	{Ralentisseur: 0},
	{AdArcher: 0},
	{Bullet: 0},
	{Arrow: 0},
	{Destructible: 0},
	{Cursorr: 0},
	{BG: 0},
	{Interface: 0},
	{Barriere1: 0},
	{Barriere2: 0},
	{Fade: 0},
	{Blood: 0},
	{Barriere3: 0},
	{Barriere4: 0},
	{Physics: 0},
	{Platform: 0},
	{Flesh: 0},
	{Function: 0},
	{ID: 0},
	{Pin: 0},
	{BulleText: 0},
	{Sine: 0},
	{CoupureRouge: 0},
	{ButtonImpact: 0},
	{ButtonMultiDash: 0},
	{ButtonBoule: 0},
	{CoolDownSpell: 0},
	{LevelText: 0},
	{CoupureBlanche: 0},
	{LevelUpText: 0},
	{TraineeGrise: 0},
	{Sprite3: 0},
	{Boule: 0},
	{AdArcher2: 0},
	{AdKnight: 0},
	{Bloodexplosion: 0},
	{Bloodexplosion2: 0},
	{bloodsposion: 0},
	{Flesh2: 0},
	{Sprite4: 0},
	{barrierebroken: 0},
	{Waitingroom: 0},
	{HUDwaitingroom: 0},
	{Sprite5: 0},
	{Spell_Text: 0},
	{loading: 0},
	{Readyforrespawn: 0},
	{Loadingbar: 0},
	{Spell_Popup: 0},
	{Spell_Popup2: 0},
	{airstrike: 0},
	{airstrikecall: 0},
	{Sprite6: 0},
	{Bandes: 0},
	{Arrow2: 0},
	{Pose: 0},
	{Sprite8: 0},
	{BouleFleche: 0},
	{Trainee: 0},
	{Volet: 0},
	{Sprite7: 0},
	{LevelPromotionText: 0},
	{Arrow3: 0},
	{AdArcher3: 0},
	{AdDasher3: 0},
	{AdDasher2: 0},
	{MenuTitre: 0},
	{FXdessous: 0},
	{FXdessus: 0},
	{HTMLElement: 0},
	{iframe: 0},
	{link: 0},
	{WishlistNoobs: 0},
	{WishlistNoobs2: 0},
	{Volet2: 0},
	{Iso: 0},
	{Solids: 0},
	{Movement: 0},
	{Adventurers: 0},
	{DestroyArrows: 0},
	{Barricades: 0},
	{SpriteFontsA: 0},
	{Boutons: 0},
	{Arrows: 0},
	{FX_DestroyOnFinished: 0},
	{ButtonLinks: 0},
	{WarningMax: 0},
	{Warning: 0},
	{WaitVolet: 0},
	{Promotion: 0},
	{PrevLevel: 0},
	{Points: 0},
	{Level: 0},
	{Stade: 0},
	{HeroMinSpeed: 0},
	{HeroSpeed: 0},
	{HeroMaxSpeed: 0},
	{DashMaxTimer: 0},
	{randomText: 0},
	{Timer_Respawn: 0},
	{Loading_Time: 0},
	{LevelStade1: 0},
	{LevelStade2: 0},
	{LevelStade3: 0}
];

self.InstanceType = {
	Audio: class extends self.IInstance {},
	Browser: class extends self.IInstance {},
	Keyboard: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	Hero: class extends self.ISpriteInstance {},
	Solid: class extends self.ISpriteInstance {},
	Camera: class extends self.ISpriteInstance {},
	AdDasher: class extends self.ISpriteInstance {},
	Ralentisseur: class extends self.ISpriteInstance {},
	AdArcher: class extends self.ISpriteInstance {},
	Arrow: class extends self.ISpriteInstance {},
	Destructible: class extends self.ISpriteInstance {},
	Cursorr: class extends self.ISpriteInstance {},
	BG: class extends self.ISpriteInstance {},
	HP: class extends self.ISpriteInstance {},
	Interface: class extends self.ISpriteInstance {},
	Barriere1: class extends self.ISpriteInstance {},
	Barriere2: class extends self.ISpriteInstance {},
	Blood: class extends self.ISpriteInstance {},
	Barriere3: class extends self.ISpriteInstance {},
	Barriere4: class extends self.ISpriteInstance {},
	Flesh: class extends self.ISpriteInstance {},
	Function: class extends self.IInstance {},
	BulleText: class extends self.ISpriteFontInstance {},
	CoupureRouge: class extends self.ISpriteInstance {},
	ButtonImpact: class extends self.ISpriteInstance {},
	ButtonMultiDash: class extends self.ISpriteInstance {},
	ButtonBoule: class extends self.ISpriteInstance {},
	CoolDownSpell: class extends self.ISpriteInstance {},
	LevelText: class extends self.ISpriteFontInstance {},
	CoupureBlanche: class extends self.ISpriteInstance {},
	LevelUpText: class extends self.ISpriteFontInstance {},
	TraineeGrise: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Boule: class extends self.ISpriteInstance {},
	AdArcher2: class extends self.ISpriteInstance {},
	AdKnight: class extends self.ISpriteInstance {},
	Bloodexplosion: class extends self.IParticlesInstance {},
	Bloodexplosion2: class extends self.IParticlesInstance {},
	bloodsposion: class extends self.ISpriteInstance {},
	Flesh2: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	barrierebroken: class extends self.ISpriteInstance {},
	Waitingroom: class extends self.ISpriteInstance {},
	HUDwaitingroom: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Spell_Text: class extends self.ISpriteInstance {},
	loading: class extends self.ISpriteInstance {},
	Readyforrespawn: class extends self.ISpriteInstance {},
	Loadingbar: class extends self.ISpriteInstance {},
	Spell_Popup: class extends self.ISpriteInstance {},
	Spell_Popup2: class extends self.ISpriteInstance {},
	airstrike: class extends self.ISpriteInstance {},
	airstrikecall: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Bandes: class extends self.ISpriteInstance {},
	Arrow2: class extends self.ISpriteInstance {},
	Pose: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	BouleFleche: class extends self.ISpriteInstance {},
	Trainee: class extends self.ISpriteInstance {},
	Volet: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	LevelPromotionText: class extends self.ISpriteFontInstance {},
	Arrow3: class extends self.ISpriteInstance {},
	AdArcher3: class extends self.ISpriteInstance {},
	AdDasher3: class extends self.ISpriteInstance {},
	AdDasher2: class extends self.ISpriteInstance {},
	MenuTitre: class extends self.ISpriteInstance {},
	FXdessous: class extends self.ISpriteInstance {},
	FXdessus: class extends self.ISpriteInstance {},
	HTMLElement: class extends self.IHTMLElementInstance {},
	iframe: class extends self.IIframeInstance {},
	WishlistNoobs: class extends self.ISpriteInstance {},
	WishlistNoobs2: class extends self.ISpriteInstance {},
	Volet2: class extends self.ISpriteInstance {},
	Iso: class extends self.ISpriteInstance {},
	Solids: class extends self.ISpriteInstance {},
	Adventurers: class extends self.ISpriteInstance {},
	DestroyArrows: class extends self.ISpriteInstance {},
	Barricades: class extends self.ISpriteInstance {},
	SpriteFontsA: class extends self.ISpriteFontInstance {},
	Boutons: class extends self.ISpriteInstance {},
	Arrows: class extends self.ISpriteInstance {},
	FX_DestroyOnFinished: class extends self.ISpriteInstance {},
	ButtonLinks: class extends self.ISpriteInstance {}
}