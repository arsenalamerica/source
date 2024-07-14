describe('MONK_TOKEN', () => {
  it('should be present', () => {
    const token = Boolean(process.env.MONK_TOKEN);
    expect(token).toBeTruthy();
  });
});
